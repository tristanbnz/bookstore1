#!/bin/bash

if [ $(python3 StaticCheck.py) = 0 ]; then
    echo 'Comments not present'
    exit 2
fi
echo 'Comment check passed'

#npm install
npm run build

echo -e "Enter commit message: "
read message
git add .
git commit -m "$message"
git push