#!/usr/bin/env python3
"""
Script to sync downloads configuration from Google Cloud Storage bucket.
Updates _config.yml with available NiceGit builds.

Requirements:
- pip install google-cloud-storage pyyaml

Usage:
- python update_downloads.py
"""

import re
from datetime import datetime
from google.cloud import storage
import yaml

BUCKET_NAME = "download.nicegit.com"
CONFIG_FILE = "_config.yml"
BUILD_PATTERN = r"NiceGit-(\d+\.\d+\.\d+)-universal\.dmg"


def get_builds_from_bucket():
    """Fetch all build files from the Cloud Storage bucket."""
    client = storage.Client()
    bucket = client.bucket(BUCKET_NAME)
    blobs = bucket.list_blobs()

    builds = []
    for blob in blobs:
        match = re.match(BUILD_PATTERN, blob.name)
        if match:
            version = match.group(1)
            builds.append({
                "version": version,
                "filename": blob.name,
                "date": blob.time_created.strftime("%Y-%m-%d")
            })

    # Sort by version (semantic versioning)
    builds.sort(key=lambda b: [int(x) for x in b["version"].split(".")])

    return builds


def update_config(builds):
    """Update _config.yml with the latest build information."""
    with open(CONFIG_FILE, "r") as f:
        config = yaml.safe_load(f)

    if not builds:
        print("No builds found in bucket")
        return

    # Update downloads section
    if "downloads" not in config:
        config["downloads"] = {}

    config["downloads"]["builds"] = builds
    config["downloads"]["current_version"] = builds[-1]["version"]  # Latest version

    # Write back to file
    with open(CONFIG_FILE, "w") as f:
        yaml.dump(config, f, default_flow_style=False, sort_keys=False)

    print(f"Updated {CONFIG_FILE} with {len(builds)} builds")
    print(f"Current version: {builds[-1]['version']}")


def main():
    try:
        builds = get_builds_from_bucket()
        update_config(builds)
    except Exception as e:
        print(f"Error: {e}")
        raise


if __name__ == "__main__":
    main()
