Private = {
	server: {port: "61440"}, // Port is overriden by env var "WWW_PORT"
	security: {authorizedIps:[
		'127.0.0.1',
		'localhost',
		// Github's IPs
		'204.232.175.64/27',
		'192.30.252.0/22'
	]},
	action: {
		prod: "../node-prod.sh",
		dev: "../node-dev.sh"
	}
};

module.exports = Private;
