// 1. ПК загадал число
// 2 Пользователь вводит ответы пока не угадает, либо пока не истечет 10 ходов
// 3. ПК проверяет введенные ответы

/*функция случайных чисел для ПК (цифры могут повторяться) */
function getRandomInt() {
  return Math.floor(Math.random() * (9)) + 1;
}
/*var num = []; //сделать функцию для автоматического загадывания значений ПК
for (let i = 0; i < 3; i++) {
    num[i] = getRandomInt();
    num.push(num[i]);
        
} */

/* функция случайных чисел для ПК БЕЗ ПОВТОРОВ */
var num = [];
var gen = function() {
    while (num.length < 4) {
    let numItem = getRandomInt();
    if (num.indexOf(numItem) < 0) {
        num.push(numItem);    
    }       
    } return num;

}
gen(); 
console.log(num);



var check = function (user) {
    let playerArray = [];
    let playerArrElement; //элемент массива

    //цикл для того, чтобы числа, который набрал user превращались в массив
    //Метод substring(start, end) возвращает подстроку с позиции start до, 
    //но не включая end. (i, 1) = i откуда начинать, 1 сколько элементов взять
    for (let i = 0; i < 4; i++) {
        playerArrElement = parseInt(user.substr(i, 1));
        playerArray.push(playerArrElement);// добавляем в массив каждый элемент
        //из строки, в момент использования substr
    }

    let bulls = 0;
    let cows = 0;
    // проверка на быка/корову,  сравниваем num с тем, что получилось
    //в результате playerArray.push
    
    /*Метод indexOf возвращает позицию первого найденного совпадения поискового выражения со строкой текста.
    Если совпадение не было найдено метод возвращает -1.
    Обратите внимание: метод indexOf чувствителен к регистру символов.*/
    for(let i = 0; i < 4; i++) {
        if (playerArray[i] == num[i]) {
            bulls++;
        } else if (num.indexOf(playerArray[i]) >= 0) {
            cows++;
        }
    }

    console.log (user);
    console.log ('Быков:' + bulls + ' ; коров: ' + cows);
    if (bulls == 4) {
        return true;
    }

    
    
};

var game = function () {
    let counter = 0;
    let end = false; // условия конца игры. Пока не конец
    console.log ('Игра началась');

    while (end != true) {
        if (counter == 9) {
            alert ('game over');
            break;
        } else {
            let userNumber = prompt ('введите число');
            counter++;
            end = check (userNumber);
        }
    }

};



//game ();