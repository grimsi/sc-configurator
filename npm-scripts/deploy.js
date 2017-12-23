var ftpClient = require('ftp-client'),
    config = {
        host: 'ftp.strato.de',
        port: 21,
        user: 'ftp@grimsi.de',
        password: Buffer.from('UmttYWNveGIlMTk5OA==', 'base64').toString()
    },
    options = {
        logging: 'basic'
    },
    client = new ftpClient(config, options);

client.connect(function () {
    client.upload(['src/**'], '/sc-config/src', {
        overwrite: 'older'
    }, function (result) {
        console.log(result);
    });
    client.upload(['index.html'], '/sc-config', {
        overwrite: 'older'
    }, function (result) {
        console.log(result);
    });
    client.upload(['license.html'], '/sc-config', {
        overwrite: 'older'
    }, function (result) {
        console.log(result);
    });
});

/*var JSFtp = require("jsftp"),
    ftp = new JSFtp({
        host: 'ftp.strato.de',
        port: 21,
        user: 'ftp@grimsi.de',
        pass: Buffer.from('UmttYWNveGIlMTk5OA==', 'base64').toString()
    })
    ftp.rename('/sc-config/build', '/sc-config/src', function(err){
    if(!err){
        console.log('Directory renamed successfully!');
    }
});*/
