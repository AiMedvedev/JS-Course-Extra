'use strict';

// Загадывание случайного числа от 1 до 100
const isNumber = function(num) {                         
    return !isNaN(parseFloat(num)) && isFinite(num);  // проверка на число
};

function guessGame (numberX) {
    return function guessing (userAnswer, i) {    
        if (i < 1) {
          let again = confirm('Попытки закончились, хотите сыграть еще?');
          if (again) {
            gameStart(answer, i = 10);
          } else {
            return;
          }
        }  

        if(+userAnswer > numberX) {
            if (userAnswer === null) {
                alert('Игра окончена.');
                return;
            }
            if (!isNumber(userAnswer)) {
                alert('Введите число!');
                
            }
            i--;
            alert(`Загаданное число меньше. осталось попыток: ${i}`);
            let newTry = prompt('Введите новый вариант');
            if (newTry === null) {
                alert('Игра окончена.');
                return;
            } else {
            userAnswer = +newTry;
            
            }
        }
        
        if (+userAnswer < numberX) {
            if (userAnswer === null) {
                alert('Игра окончена.');
                return;
            }
        
            if (!isNumber(userAnswer)) {
                alert('Введите число!');
            }
            i--;
            alert(`Загаданное число больше: осталось попыток: ${i}`); 
            let newTry = prompt('Введите новый вариант');
            if (newTry === null) {
                alert('Игра окончена.');
                return;
            } else {
            userAnswer = +newTry;
            }
        } 

        if (+userAnswer === numberX) {
            let again = confirm(`Поздравляю, Вы угадали!!! Это было число ${numberX}. Хотели бы сыграть еще?`);
            if (again) {
                gameStart(answer, i = 10);
            } else {
                return;
            }
        }

        guessing(userAnswer, i);
    };
}

let count = 10;
const numberToGuess = () => {return Math.round(Math.random() * 100);};
let answer = prompt('Угадай число от 1 до 100');


let gameStart = guessGame(numberToGuess());

gameStart(answer, count);