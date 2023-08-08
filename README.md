# View HTML

## Console
```
    npm init -y
```

## index.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
```

## Index.js
```javascript
    const http = require('http')
    const fs = require('fs')

    const server = http.createServer((req, res) => {
        const read = fs.createReadStream('./index.html')
        read.pipe(res)
    })

    server.listen(3000)
    console.log('Server on Port 3000')
```

## Run Server
```console
    node .\index.js
```