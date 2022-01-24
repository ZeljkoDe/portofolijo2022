"use strict";

const hiddenWorld = document.querySelector('.hidden_world');
const playArea = document.querySelector('body');

const theBeginingOfItAll = () => {
	playArea.classList.add('white__magic');
};

hiddenWorld.addEventListener('mouseenter', theBeginingOfItAll);

console.log('test');