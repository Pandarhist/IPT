"use strict";

const form = document.forms['matrix-info'];

let rows = 5;
let matrix = getMatrix(rows);

outputMatrix(matrix);

form.draw.onclick = function (){
    rows = form.dimension.value;
    matrix = getMatrix(rows);

    outputMatrix(matrix);
}

function getMatrix(rows){
    let matrix = "";

    for(let i = 0; i < rows; i++){
        for(let j = 1; j <= rows; j++){
            matrix = matrix.concat(`${ i + j } `);
        }

        matrix = matrix.trimEnd().concat('\n');
    }

    return matrix;
}

function outputMatrix(matrix){
    const matrixContainer = document.getElementById('matrix');

    matrixContainer.innerText = matrix;
}
