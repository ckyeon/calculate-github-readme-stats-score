import * as chalk from 'chalk';
import { Command } from 'commander';
import { ERROR_PREFIX } from '../lib/ui';

export class CommandLoader {
  public static load(program: Command): void {
    this.handleInvalidCommand(program);
  }

  private static handleInvalidCommand(program: Command) {
    program.on('command:*', () => {
      console.error(
        `\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`,
        program.args.join(' '),
      );
      console.log(
        `See ${chalk.red('--help')} for a list of available commands.\n`,
      );
      process.exit(1);
    });
  }
}