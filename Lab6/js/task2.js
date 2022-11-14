"use strict";

const form = document.getElementById('processing');

form.generate.addEventListener('click', () => processArray());
form.addEventListener('reset', () => reset());

function processArray(){
    let count = parseInt(form.length.value);
    let minBound = parseFloat(form.minBound.value);
    let maxBound = parseFloat(form.maxBound.value);
    let array = fillArray(count, minBound, maxBound);
    let modArray = map((item) => Math.pow(item, 2).toFixed(2), array);

    displayArray(array, form.array);
    displayArray(modArray, form.modArray);
}

function fillArray(count, minBound, maxBound){
    let array = Array(count);

    for(let i = 0; i < array.length; i++){
        array[i] = (Math.random() * (maxBound - minBound) + minBound).toFixed(2);;
    }

    return array;
}

function map (func, array){
    let modArray = array.slice(0);

    for (let i = 0; i < array.length; i++){
        modArray[i] = func(modArray[i]);
    }

    return modArray;
}

function displayArray(array, element){
    element.innerText = array.join(', ') + '.';
}

function reset() {
    form.array.innerText = '';
    form.modArray.innerText = '';
}
