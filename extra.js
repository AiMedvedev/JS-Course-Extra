'use strict';

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let date = new Date();
let today = date.getDay()-1;


week.splice(5, 2, week[5].italics(), week[6].italics());
week.splice(date.getDay()-1, 1, week[date.getDay()-1].bold());
week.forEach((element, i) => {
    console.log(element);
});