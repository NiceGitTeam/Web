#!/usr/bin/env ts-node
/**
 * Script to sync downloads configuration from Google Cloud Storage bucket.
 * Updates _config.yml with available NiceGit builds.
 *
 * No external dependencies - uses only Node.js built-in modules.
 *
 * Usage:
 * - ts-node update_downloads.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { get } from 'https';

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

interface ListBucketResult {
  Contents?: Array<{
    Key: string;
    LastModified: string;
  }>;
}

/**
 * Fetch bucket contents via GCS XML API (no auth required for public buckets)
 */
function getBucketContents(): Promise<ListBucketResult> {
  return new Promise((resolve, reject) => {
    const url = `https://storage.googleapis.com/${BUCKET_NAME}`;

    get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          // Parse XML response manually (no dependencies)
          const contents: ListBucketResult = { Contents: [] };
          const keyMatches = data.matchAll(/<Key>(.*?)<\/Key>/g);
          const dateMatches = data.matchAll(/<LastModified>(.*?)<\/LastModified>/g);

          const keys = Array.from(keyMatches).map(m => m[1]);
          const dates = Array.from(dateMatches).map(m => m[1]);

          for (let i = 0; i < keys.length; i++) {
            contents.Contents!.push({
              Key: keys[i],
              LastModified: dates[i]
            });
          }

          resolve(contents);
        } catch (e) {
          reject(new Error(`Failed to parse XML: ${e}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Extract builds from bucket contents
 */
function extractBuilds(bucketData: ListBucketResult): Build[] {
  const buildMap = new Map<string, Build>();

  if (!bucketData.Contents) {
    return [];
  }

  for (const item of bucketData.Contents) {
    const macMatch = item.Key.match(MAC_BUILD_PATTERN);
    const windowsMatch = item.Key.match(WINDOWS_BUILD_PATTERN);

    if (macMatch) {
      const version = macMatch[1];
      const date = item.LastModified.split('T')[0];

      if (!buildMap.has(version)) {
        buildMap.set(version, { version, date });
      }
      buildMap.get(version)!.mac_filename = item.Key;
    } else if (windowsMatch) {
      const version = windowsMatch[1];
      const date = item.LastModified.split('T')[0];

      if (!buildMap.has(version)) {
        buildMap.set(version, { version, date });
      }
      buildMap.get(version)!.windows_filename = item.Key;
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
async function main(): Promise<void> {
  try {
    console.log(`Fetching contents from gs://${BUCKET_NAME}...`);
    const bucketData = await getBucketContents();
    const builds = extractBuilds(bucketData);
    updateConfig(builds);
  } catch (e) {
    console.error(`Error: ${e}`);
    process.exit(1);
  }
}

main();
