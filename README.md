# Streams HTTP

## stream_http.js
```javascript
  const http = require('http');
  const {createReadStream} = require('fs')

  const server = http.createServer((req, res) => {
      const fileStream = createReadStream('./bigfile.txt', {
          encoding: 'utf-8'
      })
      fileStream.on('data', (chunk) =>{
          fileStream.pipe(res)
      })
      fileStream.on('error', error => {
          console.log(error)
      })
  })
```

## streams.js
```javascript
  
  const {writeFile} = require('fs/promises')

  const createBigFile = async () => {
      await writeFile('./bigfile.txt', 'hello world'.repeat(1000))
  }

  createBigFile()

  const {createReadStream} = require('fs')
  const stream = createReadStream('bigfile.txt', 'utf-8')
  stream.on('data', (chunk) => {
      console.log(chunk);
  })

  stream.on('end', () => {
      console.log('finish to read the file');
  })

  stream.on('error', () => {
      console.log(error);
  })
```