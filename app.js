'use strict'

const logo = document.querySelector('#logo');
// const brandImg = document.querySelector('li'); 
const heading = document.querySelector('.animate');
const main = document.querySelector('#main');

// // console.log(logo,brandImg);
// console.log(animateComponents);
// logo.addEventListener('click', () => {
//     logo.classList.add('shrink');
//     animateComponents.classList.add('motion');
//     brandImg.classList.add('visible');
// });

window.addEventListener('load', () => {
    logo.classList.add('animation');
    heading.classList.add('head-animate');
    main.classList.add('main');
})