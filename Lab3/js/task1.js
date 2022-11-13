"use strict";

const form = document.forms['triangle'];

form.xA.onfocus = calculateTriangleArea;
form.yA.onfocus = calculateTriangleArea;
form.xB.onfocus = calculateTriangleArea;
form.yB.onfocus = calculateTriangleArea;
form.xC.onfocus = calculateTriangleArea;
form.yC.onfocus = calculateTriangleArea;

function calculateTriangleArea(){
    let pointA = getPoint(form.xA.value, form.yA.value);
    let pointB = getPoint(form.xB.value, form.yB.value);
    let pointC = getPoint(form.xC.value, form.yC.value);

    let edgeAB = getEdgeLength(pointA, pointB);
    let edgeBC = getEdgeLength(pointB, pointC);
    let edgeAC = getEdgeLength(pointA, pointC);

    form.result.innerText = getTriangleArea(edgeAB, edgeBC, edgeAC).toString();
}

function getPoint(x, y){
    return new Object( { x: x, y: y });
}

function getEdgeLength(point1, point2){
    let dX = point2.x - point1.x;
    let dY = point2.y - point1.y;

    return Math.sqrt(dX**2 + dY**2);
}

function getTriangleArea(edge1, edge2, edge3){
    let p = (edge1 + edge2 + edge3) / 2;
    let s = Math.sqrt(p * (p - edge1) * (p - edge2) * (p - edge3));

    return parseFloat(s).toFixed(2);
}
