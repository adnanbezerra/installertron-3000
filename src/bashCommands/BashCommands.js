import { exec, execSync } from 'child_process'
import PrintTable from '../helpers/PrintTable.js'
import chalk from 'chalk'

export default class BashCommands {
  #print = new PrintTable();
  #PRIMARY_COLOR = '#D19A66';
  #JAVA = `
    sudo apt install default-jre &&
    sudo apt install default-jdk &&
    java -version &&
    javac -version  
  `;
  #POSTGRES = `
    sudo apt install postgresql postgresql-contrib &&
    sudo systemctl start postgresql.service  
  `
  #ON_RAILS = `
    sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev &&
    curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash &&
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc &&
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc &&
    source ~/.bashrc &&
    type rbenv && 
    rbenv install 3.1.4 &&
    rbenv global 3.1.4 &&
    gem install bundler &&
    gem env home &&
    gem install rails -v 6.1.4.1 &&

    rbenv rehash &&
    rails -v
  `
  #GIT = `
    sudo apt install git-all
  `

  #VS_CODE = `
    sudo snap install code --classic
  `

  execCommand(install) {
    let output;

    switch (install) {
      case 'java':
        output = execSync(this.#JAVA).toString();
        break;

      case 'on_rails':
        output = execSync(this.#ON_RAILS).toString();
        break;

      case 'git':
        output = execSync(this.#GIT).toString();
        break;

      case 'postgres':
        output = execSync(this.#POSTGRES).toString();
        break;

      case 'vscode':
        output = execSync(this.#VS_CODE).toString;
        break;

      default:
        break;
    }

    this.#print.successTable(chalk.hex(this.#PRIMARY_COLOR)('Commit successfully'), this.#formatSuccessCommitOutput(output));
  }

  bashExecCommand(command) {
    const output = execSync(command).toString();
    return output.split('\n').filter(Boolean);
  }

  #formatSuccessCommitOutput(output) {
    const regex = /^\s*\[([^\]]+)\]\s*([^ ]+ [^ ]+)(.*)/
    const match = regex.exec(output[0])
    const [branch = ': (', hash = 'xxxx'] = match[1].split(' ')
    const summary = match[2] + match[3]

    const [changed = '0 changed', insertion = '0 insertion', deletion = '0 deletion'] = output[1].split(',')

    return [
      { Branch: [branch] },
      { Hash: [hash] },
      { Summary: [summary] },
      { Changed: [changed] },
      { Insertion: [insertion] },
      { Deletion: [deletion] },
    ]

  }

}