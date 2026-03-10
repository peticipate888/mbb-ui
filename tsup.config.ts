import { defineConfig } from "tsup";
import { copyFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

// Recursively copy assets to dist/assets after build
function copyAssets(src: string, dest: string) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyAssets(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  entry: ["src/index.ts", "src/assets/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "next", "next/link", "next/image"],
  banner: {
    js: '"use client";',
  },
  // Copy static assets and CSS to dist after build
  onSuccess: async () => {
    copyAssets("src/assets", "dist/assets");
    copyFileSync("src/styles/mbb-design-system.css", "dist/mbb-design-system.css");
    console.log("✅ Assets and CSS copied to dist/");
  },

});
