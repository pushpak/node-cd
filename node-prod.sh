#!/bin/sh
echo Production master branch
# Place your script here
cd /home/ubuntu/theapp
git checkout master
git pull origin master
# push to AWS elasticbeanstalk (cli tools assumed installed and configured in the server where this app is hosted)
git aws.push