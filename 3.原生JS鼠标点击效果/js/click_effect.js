var body = document.querySelector("body");
body.addEventListener("click", (event) => {
	var divHeart = document.createElement("div");
	var x = event.clientX;
	var y = event.clientY;
	divHeart.className = "heartContainer";
	divHeart.innerHTML = "<i class=\"fa fa-heart fa-2x\"></i>";
	divHeart.style.left = x + "px";
	divHeart.style.top = y + "px";
	divHeart.style.opacity = 1;
	divHeart.firstElementChild.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
	body.appendChild(divHeart);
	moveEffect(divHeart);
}, true);
document.querySelectorAll(".btn_box a").forEach((item) => {
	item.addEventListener("click", function(event){
		item.classList.toggle("active");
	}, false);
})

function moveEffect(tagObj) {
	if(tagObj.style.opacity <= 0) {
		document.querySelector("body").removeChild(tagObj);
	} else {
		setTimeout(function() {
			var positionY = Number(tagObj.style.top.slice(0, -2));
			var opacity = Number(tagObj.style.opacity);
			tagObj.style.top = positionY - 10 + "px";
			tagObj.style.opacity = opacity - 0.1;
			moveEffect(tagObj);
		}, 50, tagObj);
	}
}