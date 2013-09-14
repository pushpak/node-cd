var config = require('../../config.js');
var range_check = require('range_check');

exports.index = function(req, res){
        res.json( { status: 'ok' });
};

exports.favicon = function(req, res){
        res.writeHead(404);
        res.end();
};

exports.github = function(req, res){
        authorizedIps = config.security.authorizedIps;
        var payload = req.body.payload;
        var validip = range_check.in_range(req.ip, authorizedIps);
        if (payload && validip == true) {
                payload = JSON.parse(payload);
                console.log('payload', payload);
                if (payload.ref === 'refs/heads/master') {
                    myExec(config.action.prod);
                } else {
                    myExec(config.action.dev);
                }
                res.writeHead(200);
        } else {
                res.writeHead(403);
        }
        res.end();
};

var myExec = function(line) {
    var exec = require('child_process').exec;
        var execCallback = function (error, stdout, stderr) {
            if (error !== null) {
              console.log('exec error: ' + error);
            }
        }
        var child = exec(line, execCallback);
}
