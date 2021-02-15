var http = require('http');
var fs = require('fs')
var url = require('url');

server = http.createServer(function (request, response) {
    // request for path of a file
    var pathname = url.parse(request.url).pathname;
    // request to read a file
    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.log("Error");
            response.writeHead(404, {'Content-Type': 'text/html'});
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        // set a response body
        response.end();

    });
});
server.listen(4000);