import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Imagine every book, letter, and newspaper in the world copied in an instant into a box on your desk, and you may read any of them by asking.";

// The gate allows 1-200 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry text is ${line.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
