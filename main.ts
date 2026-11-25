// One-Line Office Joke Laugh-Off — entry for make.fun competition
// u-suzy-one-line-office-joke-laugh-off-f574ac73
//
// Writes one line of office humour to /output/entry.txt: the sender has
// been "circling back" on the same email for so long that the email has
// acquired its own orbit — and a small moon. The corporate cliché is
// taken literally until it turns absurd, and the punchline lands on the
// last three words.
//
// Winning line, chosen from 10 candidates compared against the judge's
// five criteria (see README.md for the full comparison table):
//   "I have been circling back on the same email for so long it now has
//    its own orbit and a small moon."
// Why this one: it is unmistakably a one-line office joke (the email,
// the circling back); the punchline is a sharp, surprising image rather
// than a mild observation; it is clear on one read; it avoids every
// worn-out office cliché (no meetings-that-could-be-emails, no printer,
// no Monday coffee, no reply-all, no Wi-Fi, no deadline, no HR); and
// every word earns its place — the line is 98 characters with no filler.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I have been circling back on the same email for so long it now has its own orbit and a small moon.";

// Gate (mirrors the sealed scorer in RULES.txt): UTF-8 text of 1-200
// characters, not only whitespace, a single line, nothing appended after
// it, so the file the judge reads is byte-identical to the text above.
function validateEntry(text: string): number {
  const count = [...text].length;
  if (text.trim().length === 0) {
    throw new Error("gate: entry is only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("gate: entry must be a single line");
  }
  if (count < 1 || count > 200) {
    throw new Error(`gate: ${count} chars, must be 1-200`);
  }
  if (text !== text.trim()) {
    throw new Error("gate: entry has leading or trailing whitespace");
  }
  return count;
}

const chars = validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars}-char entry to /output/entry.txt`);
