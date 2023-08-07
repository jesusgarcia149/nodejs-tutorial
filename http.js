const http = require('http');

http.createServer(function (request, response) {
    response.write('Hello World');
    response.end();
}).listen(3000);

console.log('Server listen in port 3000');