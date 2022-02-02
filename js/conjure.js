export const conjure = {
	playArea: document.querySelector('body'),

	whereTo(className) {
		const finalDestination = document.querySelector(className).offsetTop;
		window.scrollTo({
			top: finalDestination
		});
	},

	theBeginingOfItAll() {
		this.playArea.classList.add('white__magic');
		this.whereTo('.turn_me_on');
	},

	theEndOfItAll() {
		this.playArea.classList.remove('white__magic');
		this.whereTo('body');
	},

	teaseMe() {
		this.classList.toggle('off');
		this.classList.contains('off') ? conjure.theBeginingOfItAll() : conjure.theEndOfItAll();
	}
};