"use strict";

const scale = 100;

const firstImg = document.getElementById('first-img');
const secondImg = document.getElementById('second-img');
const thirdImg = document.getElementById('third-img');

firstImg.src = "../resources/picture1.png";
secondImg.src = "../resources/picture2.png";
thirdImg.src = "../resources/picture3.png";

firstImg.addEventListener('mouseenter', () => { scaleImg(firstImg, scale) });
firstImg.addEventListener('mouseleave', () => { scaleImg(firstImg, -scale) });
secondImg.addEventListener('mouseenter', () => { scaleImg(secondImg, scale) });
secondImg.addEventListener('mouseleave', () => { scaleImg(secondImg, -scale) });
thirdImg.addEventListener('mouseenter', () => { scaleImg(thirdImg, scale) });
thirdImg.addEventListener('mouseleave', () => { scaleImg(thirdImg, -scale) });

function scaleImg(img, scale){
    img.width += scale;
    img.height += scale;
}
