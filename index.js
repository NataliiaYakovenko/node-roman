'use strict'

const fs = require('fs').promises
console.log(fs);

const p = fs.readFile('./text.txt', 'utf-8');
p.then(data=>console.log(data))

const p1 = fs.readFile('./text2.txt', 'utf-8');
p1.then(data=>console.log(data))