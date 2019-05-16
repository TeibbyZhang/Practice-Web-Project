var liArr = document.querySelectorAll("li");
var liLen = liArr.length;
var liArgArr = [];
liArr.forEach((item, index, arr) => {
	item.style.cssText = `
		position: absolute;
		margin: 0;
		left: ${(index % 3) * 220 + 10}px;
		top: ${~~(index / 3) * 220 + 10}px;
		background-color: rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});
	`;
	item.setAttribute("data", index);
	liArgArr[index] = [(index % 3) * 220 + 10, ~~(index / 3) * 220 + 10];
	item.onmousedown = function (e) {
		let initLeft = item.offsetLeft;
		let initTop = item.offsetTop; 
		let mousedownLeft = e.clientX;
		let mousedownTop = e.clientY;
		for(let i = 0; i < liLen; i++) {
			liArr[i].style.zIndex = 0;
		}
		item.style.zIndex = 10;
		document.onmousemove = (e) => {
			let dragLeft = e.clientX - mousedownLeft + initLeft;
			let dragTop = e.clientY - mousedownTop + initTop;
			item.style.left = dragLeft + "px";
			item.style.top = dragTop + "px";
		};
		document.onmouseup = (e) => {
			item.onmousemove = null;
			document.onmousemove = null;
			if(impact(item)) {
				let indexLi = impact(item) - 1;
				let temp = liArgArr[index];
				liArgArr[index] = liArgArr[indexLi];
				liArgArr[indexLi] = temp;
			}
			for(let i = 0; i < liLen; i++) {
				liArr[i].style.left = liArgArr[i][0] + "px";
				liArr[i].style.top = liArgArr[i][1] + "px";
			}
		};
		return false;
	};
});

function impact(obj) {
	let objX = obj.offsetLeft;
	let objY = obj.offsetTop;
	for(let i = 0; i < liLen; i++) {
		let X = liArgArr[i][0];
		let Y = liArgArr[i][1];
		if((objX > X - 100 && objX < X + 100) && (objY > Y - 100 && objY < Y + 100)) {
			return i + 1;
		}
	}
	return false;
}