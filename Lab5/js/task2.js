"use strict";

const firstImg = document.getElementById('first-img');
const secondImg = document.getElementById('second-img');
const thirdImg = document.getElementById('third-img');

firstImg.addEventListener('mouseenter', () => scaleImg(firstImg));
firstImg.addEventListener('mouseleave', () => noScale(firstImg));
secondImg.addEventListener('mouseenter', () => scaleImg(secondImg));
secondImg.addEventListener('mouseleave', () => noScale(secondImg));
thirdImg.addEventListener('mouseenter', () => scaleImg(thirdImg));
thirdImg.addEventListener('mouseleave', () => noScale(thirdImg));

function scaleImg(img){
    img.classList.add('image-transformed');
}

function noScale(img) {
    img.classList.remove('image-transformed');
}
