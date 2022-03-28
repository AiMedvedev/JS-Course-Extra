'use strict';

// 1е задание
const en = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
const lang = ['en', 'ru'];

let currentLang = lang[1];

if (currentLang === 'ru') {
    console.log(ru);
} else if (currentLang === 'en') {
    console.log(en);
}

currentLang = lang[0];

switch(true) {
    case currentLang === 'ru':
        console.log(ru);
        break;
    case currentLang === 'en':
        console.log(en);
        break;
}

const daysOfWeek = [en, ru];

currentLang === 'en' ? console.log(daysOfWeek[0]) : console.log(daysOfWeek[1]);

// 2е задание

let namePerson = 'Олег';

namePerson === 'Артём' ? console.log('директор') :
namePerson === 'Александр' ? console.log('преподаватель') 
: console.log('студент');