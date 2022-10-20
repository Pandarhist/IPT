"use strict";

let surname = prompt('Enter your surname below');
let sex = prompt('Enter your sex below');
let age = prompt('Enter your age below');
const info = `Surname: ${ surname }\nSex: ${ sex }\nAge: ${ age }`;

if(confirm(`${ info }\nIs all correct?`)){
    alert(`Congrats!\n${ surname }`);
}
else{
    alert('Data error!');
}
