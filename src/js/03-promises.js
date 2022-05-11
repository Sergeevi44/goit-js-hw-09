import Notiflix from "notiflix";

const refs = {
	submitBtn: document.querySelector('button[type="submit"]'),
	form: document.querySelector(".form"),
};

refs.submitBtn.addEventListener("click", onSubmitBtnClick);

function createPromise(position, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
			} else {
				reject(`❌ Rejected promise ${position} in ${delay}ms`);
			}
		}, delay);
	});
}

function onSubmitBtnClick(evt) {
	evt.preventDefault();
	let position = 0;
	let delay = refs.form.delay.value;
	const step = refs.form.step.value;
	const amount = refs.form.amount.value;
	for (let i = position; i < amount; i += 1) {
		position += 1;
		if (position != 1) {
			delay = Number(delay) + Number(step);
		}
		createPromise(position, delay)
			.then((result) => Notiflix.Notify.success(result))
			.catch((error) => Notiflix.Notify.failure(error));
	}
}
