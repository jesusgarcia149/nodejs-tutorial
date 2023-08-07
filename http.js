const http = require('http');

http.createServer(function (request, response) {
   
    console.log(request.url);

    if (request.url === '/'){
        response.write('Welcome to the Server');
        return response.end();
    }

    if (request.url === '/about'){
        response.write('Welcome to About');
        return response.end();
    }

    response.write(`
        <h1>Not Found</h1>
    `)
    response.end();

}).listen(3000);

console.log('Server listen in port 3000');