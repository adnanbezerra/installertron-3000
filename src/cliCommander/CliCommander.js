import { Command } from "commander";
import Prompt from "./CliPrompt.js";

export default class Commander {
  constructor() {
    this.program = new Command();
  }

  init() {
    const { program } = this;

    program
      .addOption(new Option('-t, --type <value>', 'Conventional Type').choices(['feat', 'fix', 'style', 'refactor', 'test', 'docs', 'chore', 'perf']))
      .action((options) => {
        new Prompt(options).run()
      })

    try {
      program.parse(process.argv)
    } catch (err) {
      process.exit(1)
    }
  }
}