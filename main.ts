// main.ts — entrypoint for the post-x game bounty.
//
// The whole job of this program is to hand the post over: it copies
// POST.json out of the repository and into the output directory, so the
// house can read the X post this entry names. Nothing else happens here —
// no network, no clock, no files outside the repository.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The post file lives at the repository root; the grader reads it from
// the output directory after this program runs.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
console.log("POST.json copied to " + join(outDir, "POST.json"));
