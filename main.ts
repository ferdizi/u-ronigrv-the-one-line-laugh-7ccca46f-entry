// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one funny line (a single sentence, at most 200 characters) to
// /output/entry.txt, exactly as the gate requires.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The microwave minute is the only minute long enough to question my entire life and still leave time to stop it at one second.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry line must not be only whitespace");
}
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts every character of entry.txt,
// so the file holds the line and nothing else. Same bytes every run.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
