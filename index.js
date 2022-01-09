"use strict";

const clickMeBtn = document.querySelector('.js-click-me');

clickMeBtn.addEventListener('click', function () {
	this.classList.toggle('active');

	this.classList.contains('active') ? document.body.style.backgroundColor = 'white' : document.body.style.backgroundColor = 'black';
});
// const animationObject = document.querySelector('.animation');

// const scroll = () => {
// 	const page = window.pageYOffset / 10;
// 	animationObject.style.borderRadius = page + 'px';
// };

// document.addEventListener('scroll', scroll);