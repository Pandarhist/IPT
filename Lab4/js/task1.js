"use strict";

let time = prompt('Input current time:');

if(time > 8 && time < 19){
    let password = prompt('Input password:');

    checkPassword(password);
}
else if(isNonWorkingTime(time)){
    alert('Non-working time.');
}
else{
    alert('Invalid time.');
}

function isNonWorkingTime(time){
    let isBeforeWork = time >= 0 && time <= 8;
    let isAfterWork = time >= 19 && time <= 24;

    return isBeforeWork || isAfterWork;
}

function checkPassword(password){
    switch (password){
        case 'Это босс':
            alert('Welcome home!');
            break;
        case null:
            alert('Authorization cancelled.');
            break;
        default:
            alert('Wrong password!');
    }
}
