import boxen from "boxen";
import inquirer from "inquirer";
import BashCommands from "./bashCommands/BashCommands.js";
import PrintTable from "./helpers/PrintTable.js";

console.log(boxen('Installertron 3000', { title: 'Welcome to', titleAlignment: 'center', borderStyle: 'double', padding: 1, borderColor: 'blue' }));

const prompts = {
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

try {
  const userInput = await inquirer.prompt(prompts);
  const commander = new BashCommands();
  commander.executer(userInput.type); 
} catch (error) {
	new PrintTable().errorTable(error.status, error.message, 'Error')
}

