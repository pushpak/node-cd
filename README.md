node-cd
=======

**Featherweight Github Continuous Deployment**

Continuously deploy any code from Github to your server.  

node-cd is a simple node.js app handling Github's post-receive hooks.  
It can execute any script you want on your server: deployment, testing, etc.  

## Setup Guide for Ubuntu 12.04 based EC2 Instances

	export LANGUAGE=en_US.UTF-8
	export LANG=en_US.UTF-8
	export LC_ALL=en_US.UTF-8
	locale-gen en_US.UTF-8
	sudo dpkg-reconfigure locales

	sudo apt-add-repository -y ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install -y python-software-properties git make g++ curl openssl
	sudo apt-get install nodejs
	sudo npm install forever -g

	git clone https://github.com/pushpak/node-cd.git
	cd node-cd/src
	npm install

	cd node-cd/src
	forever start -o node-cd-output.txt -l node-cd-log.txt -e node-cd-error.txt -a -v app.js
	
	chmod 755 node-dev.sh
	chmod 755 node-prod.sh

## Usage

* Edit the `node-prod.sh` file for `master` branch triggers and `node-dev.sh` file for `develop` branch triggers to execute whatever you like after your commits (ex: stop server, git pull, start server)
* Set your post-receive hook as described [here](https://help.github.com/articles/post-receive-hooks) with the url `http://yourserver.com:61440/github`
* Run the app (default listen on 61440 port)
	`forever start -o node-cd-output.txt -l node-cd-log.txt -e node-cd-error.txt -a -v app.js`