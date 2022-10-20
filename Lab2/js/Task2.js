"use strict";

const radius = prompt('Enter radius of the circle:');

alert(`Circle area: ${ getCircleArea(radius) }`);

function getCircleArea(radius){
    return Math.PI * radius** 2;
}
