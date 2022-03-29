'use strict';

const foolProof = function(arg) {
    if (typeof arg !== 'string') {
        alert('Нужно ввести строку!');
    }
    arg.trim();
    arg = arg.substr(0,30) + "...";
    return arg;
};
