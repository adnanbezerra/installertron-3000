import { execSync } from 'child_process'

export default class BashCommands {
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

  executer(command) {
    this.execCommand(command);

    console.log("Deu bom!");
  } 

  execCommand(install) {
    let output;
    console.log(install);

    switch (install) {
      case 'Install Java':
        output = execSync(this.#JAVA).toString();
        break;

      case 'Install Ruby on Rails':
        output = execSync(this.#ON_RAILS).toString();
        break;

      case 'Install Git':
        output = execSync(this.#GIT).toString();
        break;

      case 'Install Postgres':
        output = execSync(this.#POSTGRES).toString();
        break;

      case 'Install VSCode':
        output = execSync(this.#VS_CODE).toString();
        break;

      default:
        break;

    }
  
    return output.split('\n').filter(Boolean);
  }

}
