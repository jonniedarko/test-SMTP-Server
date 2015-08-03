'use strict';

var mailServer = require('simplesmtp');
var fs = require('fs');

process.on('uncaughtException', function(err) {
    console.log(new Date())
    console.log('Caught exception: ' + err);
});

function toDate(mail) {
	//for(var i in mail){
		//console.log('mail['+i+']');//, mail[i]);
	//}
    
    var now = new Date();
    return mail.to + '__' + ('00' + (now.getMonth() + 1)).slice(-2) + '-' +
        ('00' + now.getDate()).slice(-2) + '-' +
        now.getFullYear() + '_' +
        ('00' + now.getHours()).slice(-2) + ':' +
        ('00' + now.getMinutes()).slice(-2) + ':' +
        ('00' + now.getSeconds()).slice(-2);
        
}

function runSMTP(port, dir){
    
    var server = mailServer.createSimpleServer({SMTPBanner: 'Norman Test SMTP server'}, function (mail) {

    var mailName = toDate(mail);

    var tempPath = dir + '/' +  mailName;
    console.log('tempPath', tempPath);
    var writeStream = fs.createWriteStream(tempPath);
    mail.pipe(writeStream);

    writeStream.on('finish', function () {
        mail.accept(mailName);
    });
});

server.listen(port);

};

module.exports.run = runSMTP;
