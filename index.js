'use strict'

const fs = require('fs').promises
console.log(fs);

 fs.readFile('./text.txt', 'utf-8')
 .then(content=>{
    const newContent = `OLD content: ${content} and MEW content: 'Hello world' `
fs.writeFile('./newfile.txt', newContent,'utf8') // перезаписує файли

 })





