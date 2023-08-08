# Ecmascript Modules

## math.js
```javascript
export function add (x, y){
    return x + y
}

export function subtract (x, y){
    return x - y
}

export function multiply (x, y){
    return x * y
}

export function divide (x, y){
    return x / y
}

export default {
    add,
    subtract,
    multiply,
    divide
}
```

## esmodule.js
```javascript
    import math, {add,divide,multiply,subtract} from "math.js";
    console.log(math2.add(10,20));
    console.log(math2.subtract(10,20));
    console.log(math2.multiply(10,20));
    console.log(math2.divide(10,20));

    console.log(add(10,20));
    console.log(subtract(10,20));
    console.log(multiply(10,20));
    console.log(divide(10,20));
```