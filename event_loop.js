const http = require('http')

const server = http.createServer((req, res) => {
    if  (req.url === '/'){
        res.write('welcome to the server');
        /* Blocking code
        for(let i = 0; i < 100000; i++){
            console.log(Math.random() * i);
        }
        */
        return res.end();
    }
    if  (req.url === '/about'){
        res.write('welcome to the about');
        return res.end();
    }
    return res.end('not found');
})

server.listen(3000);
console.log('Server on port 3000');