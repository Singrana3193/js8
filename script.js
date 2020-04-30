// Задача:
// Методы массивов.
// С помощью метода reduce необходимо перебрать массив и составить объект, у которого ключ — уникальный элемент массива, значение — сколько раз он встречается в массиве. Например, перебирая массив ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo']
// мы получим {ololo: 3, anna: 2, red: 1, qwe: 1]

// Документ
// Создать список товаров (массив). У товара должно быть имя его цена и количество.
// Вывести этот список на страницу (имя, цена и количество должны быть выведены с новой строчки). 
//Для каждого второго товара сделать цвет фона серым.

'use strict'

let array = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];
let stuffs = [
    {name:'Pioneer DDJ WEGO4', price: 2400, volume:11},
    {name:'Pioneer DDJ WELKA5', price: 999, volume:8},
    {name:'Pioneer DDJ PROSTROBE', price: 4599, volume:6},
    {name:'Pioneer DDJ WEGO4', price: 755, volume:25},
    {name:'Pioneer DDJ WEGO4', price: 799, volume:475}
]

function returnStuffs(arrayOfItems){
    arrayOfItems.forEach(obj => {
    let currStuff = document.createElement('li');
    currStuff.innerHTML = (`${obj.name},  цена --  ${obj.price}грн,  кол-во на остатке -- ${obj.volume}`) ;
    return stuff.append(currStuff);
});
};

function arrParser(arr){
    var resultObj = arr.reduce((result, element) => {
        (result[element] === undefined) ? result[element] = 1 : result[element] += 1;
        return result;
      }, {});
    return resultObj;
};