
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
