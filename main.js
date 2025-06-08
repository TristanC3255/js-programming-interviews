// main.js
import { Command } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const program = new Command();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

program
  .name('main.js')
  .description('Run a problem solution by ID (e.g. arrays.5_6)')
  .argument('<problemId>', 'Problem ID in the form section.filename')
  .action(async (problemId) => {
    console.log('Calling command run...');

    try {
      const [section, file] = problemId.split('.');
      const fullPath = path.resolve(__dirname, `./problems/${section}/${file}.js`);

      if (!existsSync(fullPath)) {
        console.error(`❌ File not found: ${fullPath}`);
        process.exit(1);
      }

      const { run } = await import(`file://${fullPath}`);
      run();
    } catch (err) {
      console.error('❌ Failed to run problem:', err.message);
    }
  });

program.parse();