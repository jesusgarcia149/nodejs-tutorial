const {readFile} = require('fs');
const {promisify} = require('util');

const readFilePromise = promisify(readFile);

async function read(){
    try{
        const result = await readFilePromise("./data/fourth.txt", 'utf-8');
        console.log(result);
    }catch(error){

    }
}

read()