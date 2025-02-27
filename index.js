'use strict'

/*
Коли ми працюємо із функцією
how works REQUIRE
require(path) має 5 етапів
- resolving (шукає файл) -> loading (читає файл) ->
-> wrappening (обгортування у нодівський контекст) -> 
-> evaluation (код виконується) -> caching (кеширюється результат)
 
resolving:
   1) Core modules - встроєні модулі
   2) File:
        .js || *.json
   3) File:
         package.json -> 'main'   
         index.js || index.json
   4) node_modules        
   5) throw new Error

*/