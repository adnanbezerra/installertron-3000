import inquirer from "inquirer";
import PrintTable from "../helpers/PrintTable.js";
import BashCommands from "../bashCommands/BashCommands.js";

export default class CliController {
 prompts = {
  message: 'Commit type:',
				type: 'list',
				name: 'type',
				choices: [ 
          'Install Postgres',
          'Install Ruby on Rails',
          'Install Java',
          'Install Git',
          'Install VSCode',
				]
  }

  async act() {
    try {
      const userInput = await inquirer.prompt(this.prompts);
      const commander = new BashCommands();
      commander.executer(userInput.type); 
    } catch (error) {
	    new PrintTable().errorTable(error.status, error.message, 'Error')
    }
  }
}
