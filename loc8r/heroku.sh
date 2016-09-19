#!/bin/bash
# helpful: http://stackoverflow.com/questions/8482843/git-commit-bash-script
git add.
read -p "Commit description: " description
git commit -m "$desc"
git pust heroku master