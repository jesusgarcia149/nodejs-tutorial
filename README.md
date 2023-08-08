# Express

## console
```
    npm init -y
    npm install express
    npm install nodemon
```

## Package.json
```JSON
    {
    "name": "nodejs-tutorial",
    "version": "1.0.0",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon src/index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.18.2"
    },
    "devDependencies": {},
    "description": ""
    }

```

## src/index.js
```javascript
    import express from 'express'

    const app = express()

    app.get('/', (req, res) => {
        res.send('<h1>Welcome</h1>');
    })
    app.get('/about', (req, res) => {
        res.send('<h1>About</h1>');
    })

    app.listen(3000)
    console.log('Server on Port', 3000)
```

## console
```
    npm run dev
```
