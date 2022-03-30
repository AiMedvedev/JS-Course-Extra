'use strict';
// Задание №1.
let screenPrice = prompt('Сколько будет стоить данная работа?');

const spacesCutter = function(value) {     //  Функция убирает пробелы из вводимой строки
    let updatedValue;
    updatedValue = value.toString().trim();
    parseFloat(updatedValue);
    return updatedValue;
};


console.log(screenPrice);
console.log(spacesCutter(screenPrice));

// Задание №2.1.

let arr = ['2456764', '143321', '8555243', '4006232', '296630', '533200', '934256641'];

arr.forEach((number) => {
    if (number.indexOf('2') === 0 || number.indexOf('4') === 0) {
        console.log(number);
    }
});

// Задание №2.2.

let n = 100;
nextPrime:
    for (let i = 2; i <= n; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }

      console.log(`${i}. Делитель этого числа: 1 и ${i}`); 
    }
