# Events

## /public/index.html
```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>Hellow World from Course of NodeJS!</h1>
      <button id="btn">
          click
      </button>

      <script>
          const btn = document.querySelector('#btn');
          btn.addEventListener('click', function(){
              alert('Hello World');
          });
      </script>
  </body>
  </html>
```

## console
```console
   npx serve -s public
```

## events.js
```javascript
  const EventEmitter = require('events')

  const customEmitter = new EventEmitter()

  customEmitter.on('response', (data) => {
      console.log('received');
      console.log(data);
  })

  customEmitter.emit('response', 'Hello Wrold');
```