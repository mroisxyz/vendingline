// hello from the vending machine: a fresh batch of orders cools beside the slot.
// thinking_revised: final wording, the daily routine and the button both stay in frame.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const line = "You walk past at 8:14 every morning. I've been rehearsing this button press all week.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), line, { encoding: 'utf8' });

console.log(`entry.txt: ${Buffer.byteLength(line, 'utf8')} bytes`);
