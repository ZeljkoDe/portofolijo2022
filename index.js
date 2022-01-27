"use strict";

// const hiddenWorld = document.querySelector('.hidden_world');
const turnMeOn = document.querySelector('.switch');
const playArea = document.querySelector('body');

const conjure = {
	playArea: playArea,

	theBeginingOfItAll: () => {
		conjure.playArea.classList.add('white__magic');
	},
	theEndOfItAll: () => {
		conjure.playArea.classList.remove('white__magic');
	},

	teaseMe() {
		this.classList.toggle('off');
		this.classList.contains('off') ? conjure.theBeginingOfItAll() : conjure.theEndOfItAll();
	}
};

// hiddenWorld.addEventListener('mouseenter', theBeginingOfItAll);
turnMeOn.addEventListener('click', conjure.teaseMe);

console.log('test');