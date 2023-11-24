import boxen from "boxen";
import CliController from "./cliCommander/CliController.js";

console.log(boxen('Installertron 3000', { title: 'Welcome to', titleAlignment: 'center', borderStyle: 'double', padding: 1, borderColor: 'blue' }));

const cliController = new CliController();
cliController.act();

