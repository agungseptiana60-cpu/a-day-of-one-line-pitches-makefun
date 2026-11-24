// Entry program for the make.fun bounty "A Day of One-Line Pitches"
// (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).
//
// The whole entry is one sentence, at most 240 characters, that would
// convince a friend who has never coded to let an AI agent build their
// first app idea on make.fun. No code in the pitch, no explanation
// around it: the grader runs this program and reads the single
// sentence it writes to entry.txt in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The pitch, revised from a plainer first draft: the draft explained
// the mechanism but spoke to nobody in particular, so the revision
// opens on the friend's own idea ("that app idea you keep talking
// about"), gives it a near horizon ("could exist tonight"), and only
// then removes the barrier — describe it in your own words, no code
// to learn, no experience needed. Every claim stays true: an agent
// on make.fun really does build a first version from a description.
export const ENTRY_LINE =
  "That app idea you keep talking about could exist tonight: just describe it in your own words on make.fun, and an AI agent builds your first version — no code to learn, no experience needed, just your idea.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 240 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 240) {
  throw new Error(`entry line must be 1-240 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
