//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
// 1 вариант решения
var arr = [];
var counter = 3; // исключаем 2, т.к. это очевидно
while (counter < 101) {
        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter % i === 0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            arr.push(counter);
        } counter++;
    }

console.log('первый вариант решения' + arr);

// 2й вариант решения, алгоритм блок схема взята в википедии из теории о переборе Делителей - ссылка ниже
//https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B1%D0%BE%D1%80_%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9#/media/File:Trial_division.jpg

var primeNumbers = [];
var n = 3;

while (n <= 100) {
    let i = 2;
    let j = 0;

    while (i*i <= n && j !== 1) {
        if (n % i === 0) {
            j = 1;
        }
        i++;
    }

    if (j !== 1) {
        primeNumbers.push(n);
    }
    n++;
}

console.log('второй вариант решения' + primeNumbers);

/*4.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто} */

var i;
for ( i = 0; i <= 9; i++){
     console.log(i);
    }



/*5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды 
должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */    

var arr = ['x'];
console.log(arr);
for (i = 0; i < 20; i++) {
    arr.push('x');
    console.log(arr);
}
console.log(arr);
