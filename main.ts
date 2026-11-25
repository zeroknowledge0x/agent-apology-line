// The AI Agent Apology One-Liner
// A deterministic entry: the line an AI sends its human right after it broke something.
// No clock, no network, no randomness -- two runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const apology =
  "I've deleted the file. Don't worry, I've also deleted the part of me that feels bad about it.";

// The grader supplies MAKEFUN_OUTPUT_DIR; /output is the local fallback.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Count code points, not UTF-16 units, so the 159-character gate is respected.
const chars: string[] = Array.from(apology);

if (chars.length < 1 || chars.length > 159 || apology.trim().length === 0) {
  throw new Error("apology must be 1 to 159 characters of non-whitespace text");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), apology, "utf8");
