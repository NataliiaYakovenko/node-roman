"use strict";

const _ = require('lodash');

const randomNumber = Number(_.random(1,10,true).toFixed(2));
console.log('--->>> START <<<---');
console.log(randomNumber);
console.log('--->>> END <<<---');

const div = document.querySelector('#root');
div.append('HELLO WEBPACK');

/*
App.js        |
Dashboard.js  | Bandler(webpack - збірник проектів)| Bandel.js (отримуємо один js файл з усіма проектами)
About.js      |

Bandel - код різних модулей, зібраних в одному файлі

webpack - може працювати у двох режимах
1. production - фінальна збірка проекту перед завантаженням на сервер
2. development - для тестових зборок, які потрібні для розробки
*/