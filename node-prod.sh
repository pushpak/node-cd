#!/bin/sh
echo Production master branch
# Place your script here
cd /home/ubuntu/theapp
exec git checkout master
exec git pull origin master