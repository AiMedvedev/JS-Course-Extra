'use strict';

//  Создать массив week и записать в него дни недели в виде строк

// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)


const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let date = new Date();
let day = document.querySelectorAll('.day');
let today = date.getDay() - 1;


week.splice(5, 2, week[5].italics(), week[6].italics());

week.forEach((element, i) => {
    day[i].innerHTML = element;
    if (date) {
        day[today].innerHTML = '<b>' + day[today].innerHTML + '</b>';
    }
});