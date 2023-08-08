const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./index.html')
    read.pipe(res)
})

server.listen(3000)
console.log('Server on Port 3000')