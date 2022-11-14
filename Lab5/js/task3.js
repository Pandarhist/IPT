"use strict";

const items = document.getElementsByClassName('main-nav__link');

for(let i = 0; i < items.length; i++){
    items[i].addEventListener('mouseenter', () => highlightLink(items[i]));
    items[i].addEventListener('mouseleave', () => removeHighlight(items[i]));
}

function highlightLink (link) {
    link.classList.add('main-nav__link-hover');
}

function removeHighlight (link) {
    link.classList.remove('main-nav__link-hover');
}
