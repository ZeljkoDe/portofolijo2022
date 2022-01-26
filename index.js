"use strict";

// const hiddenWorld = document.querySelector('.hidden_world');
const playArea = document.querySelector('body');
const turnMeOn = document.querySelector('.switch');

const theBeginingOfItAll = () => {
	playArea.classList.add('white__magic');
};

const zigibigul = function () {
	console.log(this);
	this.classList.toggle('off');
};

// hiddenWorld.addEventListener('mouseenter', theBeginingOfItAll);
turnMeOn.addEventListener('click', zigibigul);

console.log('test');