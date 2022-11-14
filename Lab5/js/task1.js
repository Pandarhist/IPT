"use strict";

const firstImg = document.getElementById('first-img');
const secondImg = document.getElementById('second-img');
const thirdImg = document.getElementById('third-img');
const currentImg = document.getElementById('current-img');

firstImg.src = "../resources/picture1.png";
secondImg.src = "../resources/picture2.png";
thirdImg.src = "../resources/picture3.png";
currentImg.src = "../resources/picture1.png";

firstImg.onclick = () => currentImg.src = firstImg.src;
secondImg.onclick = () => currentImg.src = secondImg.src;
thirdImg.onclick = () => currentImg.src = thirdImg.src;
