#!/bin/bash

options=$(zenity --list --checklist --title="Installertron 3000" \
  --text="Select what you want to install" \
  --column="Option" \
  --column="What will you install?" \
  "1" \
  "NodeJS" \
  "2" \
  "PostgreSQL" \
  "3" \
  "Ruby on Rails" \
  "4" \
  "VSCode" \
  "5" \
  "Git" \
  "6" \
  "Java" \
  "7" |
  "Neovim && nvChad")

IFS='|' read -r -a array <<< "$options"

for element in ${array[@]}
do
  case "$element" in
    NodeJs) install_node
    ;;
    PostgreSQL) install_postgres
    ;;
    Ruby on Rails) install_ruby
    ;;
    VSCode) install_vs
    ;;
    Git) install_git
    ;;
    Java) install_java
    ;;
    Neovim && nvChad) install_nvc
    *) echo "Something wrong isn't quite right here"
    ;;
  esac
done

install_node () {

}

install_postgres() {

}

install_ruby() {

}

install_vs() {

}

install_git() {

}

install_java() {

}

install_nvc() {

}

