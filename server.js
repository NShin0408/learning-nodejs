var http = require('http');
var fs = require('fs');
var config = require('./config')
var server = http.createServer();

server.on('request', function (req, res) {
    fs.readFile(__dirname + '/hello.html', 'utf-8', function (err, data) {
        // エラー発生時処理
        if (err) {
            res.writeHead(404, {'Content-Type' : 'text/plain'});
            res.write('page not found');

            // return を使って処理を止める
            return res.end();
        }

        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    })
});

server.listen(config.port);