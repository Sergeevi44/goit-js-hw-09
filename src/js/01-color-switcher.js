const refs = {
	body: document.querySelector("body"),
	startBtn: document.querySelector("[data-start]"),
	stopBtn: document.querySelector("[data-stop]"),
};

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
	refs.startBtn.disabled = true;
	return (changeColor = setInterval(() => {
		refs.body.style.backgroundColor = `${getRandomHexColor()}`;
	}, 1000));
}

function onStopBtnClick() {
	refs.startBtn.disabled = false;
	clearInterval(changeColor);
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
