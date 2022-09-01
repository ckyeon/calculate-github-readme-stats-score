#! /usr/bin/env node
import { Command } from 'commander';

const bootstrap = () => {
  const program = new Command();
  program.version(
    require('../package.json').version,
    '-v, --version',
    'Output the current version.',
  )
  .usage('<command> [options]')
  .helpOption('-h, --help', 'Output usage information.')
  .parse();

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

bootstrap();