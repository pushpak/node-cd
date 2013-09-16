#!/bin/sh
echo Development develop branch
# Place your script here
cd /home/ubuntu/theapp
git checkout develop
git pull origin develop
# push to AWS elasticbeanstalk (cli tools assumed installed and configured in the server where this app is hosted)
git aws.push