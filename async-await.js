const {readFile} = require('fs');

const getText = (pathFile) => {
    return new Promise(function (resolve, reject){
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    });
}

// getText('./data/fourth.txt')
//    .then((result) => console.log(result))
//    .catch(error => console.log(error))

async function read(){
    const result = await getText('./data/fourth.txt');
    console.log(result);
}

read()