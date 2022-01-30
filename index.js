"use strict";

// const hiddenWorld = document.querySelector('.hidden_world');
const turnMeOn = document.querySelector('.switch');
const playArea = document.querySelector('body');

const conjure = {
	playArea: playArea,

	theBeginingOfItAll() {
		const offset = document.querySelector('#first').offsetTop;
		this.playArea.classList.add('white__magic');
		this.whereTo(offset);
	},

	theEndOfItAll() {
		this.playArea.classList.remove('white__magic');
		this.whereTo(0);
	},

	whereTo(position) {
		window.scrollTo({
			top: position
		});
	},

	teaseMe() {
		this.classList.toggle('off');
		this.classList.contains('off') ? conjure.theBeginingOfItAll() : conjure.theEndOfItAll();
	}
};

// hiddenWorld.addEventListener('mouseenter', theBeginingOfItAll);
turnMeOn.addEventListener('click', conjure.teaseMe);
