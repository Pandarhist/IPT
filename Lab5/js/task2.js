"use strict";

const firstImg = document.getElementById('first-img');
const secondImg = document.getElementById('second-img');
const thirdImg = document.getElementById('third-img');

firstImg.src = "../resources/picture1.png";
secondImg.src = "../resources/picture2.png";
thirdImg.src = "../resources/picture3.png";

firstImg.addEventListener('mouseenter', () => scaleImg(firstImg));
firstImg.addEventListener('mouseleave', () => scaleImg(firstImg));
secondImg.addEventListener('mouseenter', () => scaleImg(secondImg));
secondImg.addEventListener('mouseleave', () => scaleImg(secondImg));
thirdImg.addEventListener('mouseenter', () => scaleImg(thirdImg));
thirdImg.addEventListener('mouseleave', () => scaleImg(thirdImg));

function scaleImg(img, scale){
    img.width += scale;
    img.height += scale;
}
