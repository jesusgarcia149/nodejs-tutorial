# CommonJS Modules

- 1.- create files
- 1.1.- create file" index.js"
- 1.2.- create file "main.js"
- 1.3.- create folder "module"
- 1.4.- create file "module/myModule.js"

## Export Single Module
- Main.js
```javascript
    const web = require('./module/myModule')
    console.log(web);
```
- myModules.js
```javascript
const myWebAddress = "jesusnaxcs.com"
module.exports = myWebAddress
console.log(module);
```
- run script
`node main.js`
- return
```
    jesusnaxcs.com
```

## Export Multiples Module
- Main.js
```javascript
    const web = require('./module/myModule')
    console.log(web);
```
- myModules.js
```javascript
const myWebAddress = 'jesuanxcs.com'
const myNumer = 25
const myArray = [10, 20, 30]
const user = {
    name: 'ryan',
    lastname: 'ray'
}

const group = {
    myWebAddress: myWebAddress,
    myNumer: myNumer,
    myArray: myArray,
    user: user
}

module.exports = group
```
- run script
`node main.js`
- return
```javascript
    {
    myWebAddress: 'jesuanxcs.com',
    myNumer: 25,
    myArray: [ 10, 20, 30 ],
    user: { name: 'ryan', lastname: 'ray' }
    }
```