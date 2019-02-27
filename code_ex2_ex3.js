console.log('Ниже решения про корзину интернет магазина задания 2,3')
/*2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в 
зависимости от находящихся в ней товаров.*/


//******************** */Решение
/*выбранный клиентом товар и его количество 
храним в виде массива [стоимость за единицу, количество единиц] */

var apple = [120, 2];

var orange = [300, 1];

var mango = [250, 1];

/* фукнция для подсчета стоимости ОДНОГО выбранного товара с учетом количества */
function basketOneProduct (name) {
    let oneProduct = (name[0] * name[1]);
    return oneProduct;
}
console.log(basketOneProduct(apple));
console.log(basketOneProduct(orange));

//3. a) Организовать такой массив для хранения товаров в корзине;
var basketTotalArr = [];
basketTotalArr.push(apple, orange, mango);
console.log(basketTotalArr);


//3. b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. 
function countBasketPrice (basketTotalArr) {
    let sumOfProducts = 0;
    for (var i = 0; i < basketTotalArr.length; i++){
        let sum = basketOneProduct(basketTotalArr[i]);
        sumOfProducts += sum; 
    } 
    return sumOfProducts;
    
} 
console.log (countBasketPrice(basketTotalArr));