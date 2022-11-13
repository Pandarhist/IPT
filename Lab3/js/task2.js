"use strict";

const origin = getPoint(0, 0);
const form = document.forms['vector'];

form.xA.onselect = calculateVector;
form.yA.onselect = calculateVector;

function calculateVector() {
    let point = getPoint(form.xA.value, form.yA.value);
    let lineLength = getEdgeLength(origin, point);

    form.result.innerText = lineLength.toString();
}

function getPoint(x, y){
    return new Object( { x: x, y: y } );
}

function getEdgeLength(point1, point2){
    let dX = point2.x - point1.x;
    let dY = point2.y - point1.y;

    return parseFloat(Math.sqrt(dX**2 + dY**2)).toFixed(2);
}
