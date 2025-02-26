'use strict'

/*
REPL:
 read - прочитай
 eval - виконай
 print - виведи
 loop - повтори

*/

const {MyMath} = require('./MyMath')
const {Component}  = require('./Component.js');

const sum = MyMath.sum(2,2)
console.log(sum);

const mult = MyMath.mult(2,3)
console.log(mult);

const component = new Component()
console.log(component);

/*
Створіть декілька функцій або класів, 
спробуйте їх експортувати і імпортувати у index.js

*/