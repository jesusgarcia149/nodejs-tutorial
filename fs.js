const fs = require('fs');

const first = fs.readFileSync('./data/first.txt', 'utf-8'); 
const second = fs.readFileSync('./data/second.txt', 'utf-8'); 
const third = fs.readFileSync('./data/third.txt', 'utf-8'); 

console.log(first);
console.log(second);

// fs.writeFileSync('./data/third.txt', 'este es un tercer archivo');

const title = 'este contenido se ha añadido';

fs.writeFileSync('./data/fourth.txt', title, {
    flag: 'a'
})

console.log(third);