#!/usr/bin/env node

/**
 * mbb-ui-setup
 *
 * Copies @peticipate/mbb-ui static assets (icons, logos, backgrounds, etc.)
 * into the consuming project's public/mbb-assets/ directory.
 *
 * Usage:
 *   - Add to your package.json scripts: "postinstall": "mbb-ui-setup"
 *   - Or run manually: npx mbb-ui-setup
 *
 * The script auto-detects the project root by walking up from cwd
 * looking for package.json, then copies assets to public/mbb-assets/.
 */

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source: dist/assets/ inside the mbb-ui package
const ASSETS_SRC = resolve(__dirname, "..", "dist", "assets");

// Subdirectories to copy (skip compiled JS/TS build artifacts)
const ASSET_DIRS = [
  "backgrounds",
  "home-kv",
  "icons",
  "illustrations",
  "logos",
  "pets",
  "ui",
];

/**
 * Find the consuming project root by walking up from cwd.
 * Stops at the first package.json that is NOT inside node_modules.
 */
function findProjectRoot() {
  let dir = process.cwd();
  while (dir !== dirname(dir)) {
    const pkg = join(dir, "package.json");
    if (existsSync(pkg) && !dir.includes("node_modules")) {
      return dir;
    }
    dir = dirname(dir);
  }
  return process.cwd();
}

function main() {
  // Validate source exists
  if (!existsSync(ASSETS_SRC)) {
    console.error(
      "❌ mbb-ui-setup: dist/assets/ not found. Run `pnpm build` in mbb-ui first."
    );
    process.exit(1);
  }

  const projectRoot = findProjectRoot();
  const dest = join(projectRoot, "public", "mbb-assets");

  // Clean previous copy to avoid stale files
  if (existsSync(dest)) {
    rmSync(dest, { recursive: true, force: true });
  }

  mkdirSync(dest, { recursive: true });

  let copied = 0;
  for (const subdir of ASSET_DIRS) {
    const src = join(ASSETS_SRC, subdir);
    if (!existsSync(src)) continue;

    const target = join(dest, subdir);
    cpSync(src, target, { recursive: true });
    copied++;
  }

  if (copied === 0) {
    console.warn("⚠️  mbb-ui-setup: No asset directories found to copy.");
  } else {
    console.log(
      `✅ mbb-ui-setup: Copied ${copied} asset directories → public/mbb-assets/`
    );
  }
}

main();
