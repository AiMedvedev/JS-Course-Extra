let num = 266219;

num = num.toString(); //  превращаем число в строку

const arr = [...num].map(Number);  // превращаем строку в массив из цифр и присваиваем переменной arr

const arrMulti = arr.reduce((acc, number) => acc * number); // перемножаем все элементы массива методом reduce

const finalResult = arrMulti ** 3; //  возводим результат в 3ю степень

console.log(finalResult); // итоговый результат

console.log(finalResult.toString().substring(0, 2)); // преобразую в строку и отделяю первые 2 символа

