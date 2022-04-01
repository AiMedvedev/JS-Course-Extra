'use strict';

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let date = new Date();
let today = date.getDay()-1;


week.splice(5, 2, week[5].italics(), week[6].italics());
week.splice(today, 1, week[today].bold());
week.forEach((element, i) => {
    console.log(element);
});