"use strict";

import { conjure } from './conjure.js';

// const hiddenWorld = document.querySelector('.hidden_world');
const turnMeOn = document.querySelector('.switch');

// hiddenWorld.addEventListener('mouseenter', theBeginingOfItAll);
turnMeOn.addEventListener('click', conjure.teaseMe);

// function click(who, what) {
// 	who.addEventListener('click', what);
// }

// click(turnMeOn, conjure.teaseMe);