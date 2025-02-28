"use strict";

const fs = require("fs").promises;
console.log(fs);

fs.readFile("./text.txt", "utf-8").then((content) => {
  const newContent = `APPEND OLD content: ${content} and MEW content: 'Hello world' `;
 // fs.writeFile("./newfile.txt", newContent, "utf8"); // перезаписує файли
 fs.appendFile('./newfile.txt',newContent, "utf8") //дописує файли
});


/*Задача: замінить якусь частину файлу
  1. Спочатку читаємо ВЕСЬ файл через .readFile => ВЕСЬ зміст файлу
  2. Якось змінюємо зміст через JS => ту частину вмісту файлу, яка нам потрібна
  3. Перезаписати цільовий файл через .writeFile тими даними, які ми отримали у пункті 2
  

*/