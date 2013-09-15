#!/bin/sh
echo Development develop branch
# Place your script here
cd /home/ubuntu/theapp
exec git checkout develop
exec git pull origin develop