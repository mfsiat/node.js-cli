const program = require('commander');
const key = require('../commands/key');

// set
program
  .command('set')
  .description('Set API key -- Get at https://nomics.com')
  .action(key.set);

// show
program
  .command('show')
  .description('Show API key')
  .action(key.show);

// remove
program
  .command('remove')
  .description('Remove API key')
  .action(key.remove);

program.parse(process.argv);