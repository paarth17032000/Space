'use strict'

const logo = document.querySelector('#logo');
const brandImg = document.querySelector('li'); 
// console.log(logo,brandImg);
logo.addEventListener('click', () => {
    logo.classList.add('shrink');
});