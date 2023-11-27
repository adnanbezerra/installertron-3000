#!/bin/bash

options=$(zenity --list --checklist --title="Installertron 3000" \
  --text="Select what you want to install" \
  --column="Option" \
  --column="What will you install?" \
  "1" \
  "NodeJS" \
  "3" \
  "PostgreSQL");

IFS='|' read -r -a array <<< "$options"

for element in ${array[@]}
do
  echo $element
done

