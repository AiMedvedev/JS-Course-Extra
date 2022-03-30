'use strict';
// Задание №1.
const spacesCutter = function(value) {     //  Функция убирает пробелы из вводимой строки
    let updatedValue;
    updatedValue = value.toString().trim();
    parseFloat(updatedValue);
    return updatedValue;
};

let screenPrice = prompt('Сколько будет стоить данная работа?');


console.log(screenPrice);
console.log(spacesCutter(screenPrice));

// Задание №2.

