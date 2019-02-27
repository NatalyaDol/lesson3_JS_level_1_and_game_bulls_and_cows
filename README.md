# lesson3_JS_level_1_and_game_bulls_and_cows
А. Пояснение к ДЗ
Игра Быки и коровы в файле code_bulls_cows.js
Задание №1,4,5 в файле code.js
Задание про корзину №2,3 в файле code_ex2_ex3.js

Б. Вопросы по ДЗ
В игре быки и коровы не смогла задать функцию, которая бы возвращала   РАЗНЫЕ ЗНАЧЕНИЯ! Пожалуйста расскажите как это сделать

//функция случайных чисел для ПК
function getRandomInt() {
  return Math.floor(Math.random() * (9)) + 1;
}
var num = []; //сделать функцию для автоматического загадывания значений ПК
for (let i = 0; i < 3; i++) {
    num[i] = getRandomInt();
    num.push(num[i]);
        
}
