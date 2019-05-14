(function(w, d) {
	setBubbles();
	setInterval(setBubbles, 10000)
	function setBubbles() {
		var bubbles = d.querySelector(".bubbles");
		bubbles.innerHTML = "";
		var bubblesNum = bubbles.getAttribute("set-num");
		var duration = bubbles.getAttribute("duration");
		for(let i = 0; i < bubblesNum; i++) {
			let bubble = d.createElement("div");
			bubble.className = "bubble";
			let randomNum = Math.random() * 10 + 5;
			bubble.style.cssText = `
				width: ${randomNum}vh;
				height: ${randomNum}vh;
				left: ${Math.random() * 100}vw;
				animation: up ${Math.random() * (duration - 1) + 1}s ease-in-out;
			`;
			bubbles.appendChild(bubble);
		}
	}
})(window, document)