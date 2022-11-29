'use strict';

const count = document.querySelector('.count');
const random = document.querySelector('.random');
const buttons = document.querySelector('.buttons');

// RANDOM COLOR()
random.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    count.innerHTML = "#" + randomColor;
    count.style.backgroundColor = '#' + randomColor;
    console.log(randomColor);
});
