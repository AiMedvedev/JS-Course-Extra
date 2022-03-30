'use strict';

const foolProof = function(arg) {
    if (typeof arg !== 'string') {
        alert('Нужно ввести строку!');
    }
    arg.trim();
    if (arg.length >= 30) {
        arg = arg.substr(0,30) + "...";
    }
    return arg;
};
