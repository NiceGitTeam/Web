#!/usr/bin/env ts-node
/**
 * Script to sync downloads configuration from Google Cloud Storage bucket.
 * Updates _config.yml with available NiceGit builds.
 *
 * Requires gcloud CLI tool to be installed and authenticated.
 *
 * Usage:
 * - ts-node update_downloads.ts
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

const BUCKET_NAME = 'download.nicegit.com';
const CONFIG_FILE = '_config.yml';
const MAC_BUILD_PATTERN = /NiceGit-(\d+\.\d+\.\d+)-universal\.dmg/;
const WINDOWS_BUILD_PATTERN = /NiceGit-(\d+\.\d+\.\d+) Setup\.exe/;

interface Build {
  version: string;
  mac_filename?: string;
  windows_filename?: string;
  date: string;
}

interface BucketItem {
  name: string;
  timeCreated: string;
}

/**
 * Fetch bucket contents using gcloud CLI
 */
function getBucketContents(): BucketItem[] {
  try {
    const output = execSync(`gcloud storage ls --json gs://${BUCKET_NAME}`, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });

    const items = JSON.parse(output);
    return items.map((item: any) => ({
      name: item.metadata.name,
      timeCreated: item.metadata.timeCreated
    }));
  } catch (e) {
    throw new Error(`Failed to fetch bucket contents: ${e}`);
  }
}

/**
 * Extract builds from bucket contents
 */
function extractBuilds(bucketData: BucketItem[]): Build[] {
  const buildMap = new Map<string, Build>();

  for (const item of bucketData) {
    const macMatch = item.name.match(MAC_BUILD_PATTERN);
    const windowsMatch = item.name.match(WINDOWS_BUILD_PATTERN);

    if (macMatch) {
      const version = macMatch[1];
      const date = item.timeCreated.split('T')[0];

      if (!buildMap.has(version)) {
        buildMap.set(version, { version, date });
      }
      buildMap.get(version)!.mac_filename = item.name;
    } else if (windowsMatch) {
      const version = windowsMatch[1];
      const date = item.timeCreated.split('T')[0];

      if (!buildMap.has(version)) {
        buildMap.set(version, { version, date });
      }
      buildMap.get(version)!.windows_filename = item.name;
    }
  }

  const builds = Array.from(buildMap.values());

  // Sort by semantic version
  builds.sort((a, b) => {
    const aParts = a.version.split('.').map(Number);
    const bParts = b.version.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
      if (aParts[i] !== bParts[i]) {
        return aParts[i] - bParts[i];
      }
    }
    return 0;
  });

  return builds;
}

/**
 * Simple YAML parser/updater for the downloads section
 */
function updateConfig(builds: Build[]): void {
  if (builds.length === 0) {
    console.log('No builds found in bucket');
    return;
  }

  const configContent = readFileSync(CONFIG_FILE, 'utf-8');

  // Find the downloads section
  const downloadsMatch = configContent.match(/^# --------\n# Downloads\n\ndownloads:[\s\S]*?(?=\n(?:#|$))/m);

  if (!downloadsMatch) {
    console.error('Downloads section not found in config');
    return;
  }

  // Build new YAML for downloads section
  const currentVersion = builds[builds.length - 1].version;
  let newDownloadsSection = '# --------\n# Downloads\n\ndownloads:\n';
  newDownloadsSection += '  builds:\n';

  for (const build of builds) {
    newDownloadsSection += `    - version: "${build.version}"\n`;
    if (build.mac_filename) {
      newDownloadsSection += `      mac_filename: "${build.mac_filename}"\n`;
    }
    if (build.windows_filename) {
      newDownloadsSection += `      windows_filename: "${build.windows_filename}"\n`;
    }
    newDownloadsSection += `      date: "${build.date}"\n`;
  }

  newDownloadsSection += `  current_version: "${currentVersion}"`;

  // Replace the downloads section
  const updatedConfig = configContent.replace(
    /# --------\n# Downloads\n\ndownloads:[\s\S]*?(?=\n(?:#|$)|$)/,
    newDownloadsSection
  );

  writeFileSync(CONFIG_FILE, updatedConfig, 'utf-8');

  console.log(`Updated ${CONFIG_FILE} with ${builds.length} builds`);
  console.log(`Current version: ${currentVersion}`);
}

/**
 * Main execution
 */
function main(): void {
  try {
    console.log(`Fetching contents from gs://${BUCKET_NAME}...`);
    const bucketData = getBucketContents();
    const builds = extractBuilds(bucketData);
    updateConfig(builds);
  } catch (e) {
    console.error(`Error: ${e}`);
    process.exit(1);
  }
}

main();
