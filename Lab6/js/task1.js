"use strict";

const form = document.getElementById('searching');

form.find.addEventListener('click', () => findElement());
form.addEventListener('reset', () => reset())

function findElement (){
    let array = form.array.value.split(', ');
    let value = form.element.value;
    let index = find(array, value);

    displayResult(index);
}

function find(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }

    return -1;
}

function displayResult(result){
    form.result.innerText = result.toString();
}

function reset(){
    form.result.innerText = '';
}
