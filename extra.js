'use strict';
//// Формат А.

let currentDate = document.getElementById('time');
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", 
"августа", "сентября", "октября", "ноября", "декабря"];

setInterval(() => {
    
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let day = new Date().getDay().toLocaleString();
    let hours = new Date().getHours().toLocaleString();
    let minutes = new Date().getMinutes().toLocaleString();
    let seconds = new Date().getSeconds().toLocaleString();
    
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let hoursText = (hours === 1 || (hours > 19 && hours % 10 === 1)) ? 'час' :
    ((hours > 1 && hours < 5) || (hours > 19 && hours % 10 > 1 && hours % 10 < 5)) ? 'часа' : 'часов';

    let minutesText = (minutes >= 2 && minutes < 5 || (minutes > 20 && (minutes % 10 >= 2 && minutes % 10 < 5))) ? 
    'минуты' : (minutes === 1 || (minutes > 20 && minutes % 10 === 1)) ? 'минута' : 'минут';

    let secondsText = (seconds >= 2 && seconds < 5 || (seconds > 20 && (seconds % 10 >= 2 && seconds % 10 < 5))) ? 
    'секунды' : (seconds === 1 || (seconds > 20 && seconds % 10 === 1)) ? 'секунда' : 'секунд';


    currentDate.innerHTML = `Сегодня ${days[day]}, ${date} ${months[month]} ${year} года, 
    ${hours} ${hoursText} ${minutes} ${minutesText} ${seconds} ${secondsText}`;    
}, 1000);

//// Формат Б.

//let time = document.getElementById('time');
//let currentDate = new Date().toLocaleDateString();
//let currentTime = function getCurrentTimeString() {
//     return new Date().toTimeString().replace(/ .*/, '');
//};
 
//setInterval(
//    () => time.innerHTML =`${currentDate} - ` + currentTime(),
//    1000
//);