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
forever start -o node-cd-output.txt -l node-cd-log.txt -e node-cd-error.txt -a app.js