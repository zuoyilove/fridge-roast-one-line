// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line about a smart fridge to /output/entry.txt.
// The line must stay within the 200-character gate, so it is kept as one
// short string and its length is asserted before anything is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.ENTRY_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const ROAST =
  "My fridge updated its firmware at 3 a.m., rebooted twice, and now the ice maker is still buffering yesterday's ice.";

const MAX_CHARS = 200;

function main(): void {
  if (ROAST.length === 0 || ROAST.length > MAX_CHARS) {
    throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ROAST, "utf8");
}

main();
