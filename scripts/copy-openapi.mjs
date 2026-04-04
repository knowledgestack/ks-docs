/**
 * Copies openapi.yaml into public/ so Scalar can load it at runtime.
 *
 * Resolution order:
 * 1. OPENAPI_SPEC_PATH env var (explicit path)
 * 2. Sibling ks-backend repo (../ks-backend/docs/openapi.yaml)
 * 3. CI artifact (already in public/openapi.yaml from GitHub Actions download)
 *
 * Runs automatically via prebuild/predev npm scripts.
 */
import { copyFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dest = resolve(__dirname, "../public/openapi.yaml");

// Already present (e.g. CI downloaded it)
if (existsSync(dest)) {
  console.log("openapi.yaml already present in public/");
  process.exit(0);
}

const candidates = [
  process.env.OPENAPI_SPEC_PATH,
  resolve(__dirname, "../../ks-backend/docs/openapi.yaml"),
].filter(Boolean);

for (const src of candidates) {
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`Copied openapi.yaml from ${src}`);
    process.exit(0);
  }
}

console.warn(
  "WARNING: openapi.yaml not found. API reference page will be empty.\n" +
    "Options:\n" +
    '  - Run "make apispec" in ks-backend\n' +
    "  - Set OPENAPI_SPEC_PATH env var\n" +
    "  - Place openapi.yaml in public/"
);
