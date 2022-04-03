'use strict';

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let date = new Date();
let currentDay = document.querySelector('.today');
let day = document.querySelectorAll('.day');
let today = date.getDay() - 1;


week.splice(5, 2, week[5].italics(), week[6].italics());

week.forEach((element, i) => {
        day[i].innerHTML = element;
        if(currentDay) {
            currentDay.innerHTML = '<b>' + element + '</b>';
        }
});