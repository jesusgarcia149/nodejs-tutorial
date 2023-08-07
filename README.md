# First Module

## Index.js
```javascript
    function add (x, y){
        return x + y
    }

    function subtract (x, y){
        return x - y
    }

    function multiply (x, y){
        return x * y
    }

    function divide (x, y){
        return x / y
    }


    // console.log(add(10,20));
    // console.log(subtract(10,20));
    // console.log(multiply(10,20));
    // console.log(divide(10,20));

    module.exports = {
        add,
        subtract,
        multiply,
        divide
    }
```

## Main.js
```javascript
    const math = require("./math/index");

    console.log(math);

    console.log(math.add(10, 200));
    console.log(math.subtract(10, 200));
    console.log(math.multiply(10, 200));
    console.log(math.divide(10, 200));
```