function start() {
	function getselector(id) {
		return document.querySelector(id);
	}

	const sec = getselector("#seconds");
	const min = getselector("#minutes");
	const hou = getselector("#hours");

	function clock() {
		let date = new Date();
		let s = date.getSeconds() * 6 + 0.5;
		let m = date.getMinutes() * 6 + s / 60 + 0.5;
		let h = date.getHours() * 30 + m / 12 + 0.5;

		rotate(sec, s);
		rotate(min, m);
		rotate(hou, h);
	}

	function rotate(element, rotate) {
		return element.style.transform = `rotate(${rotate}deg)`;	
	}
	
	setInterval(clock, 1000);
} 
start();	
