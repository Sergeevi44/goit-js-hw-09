import Notiflix from "notiflix";

const refs = {
	submitBtn: document.querySelector('button[type="submit"]'),
	form: document.querySelector(".form"),
};

refs.submitBtn.addEventListener("click", onSubmitBtnClick);

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	if (shouldResolve) {
		resolve(); // Fulfill
	} else {
		// Reject
	}
}

function onSubmitBtnClick(evt) {
	evt.preventDefault();
	const delay = refs.form.delay.value;
	const step = refs.form.step.value;
	const amount = refs.form.amount.value;
	console.log({ delay, step, amount });
}

// createPromise(2, 1500)
// 	.then(({ position, delay }) => {
// 		console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// 	})
// 	.catch(({ position, delay }) => {
// 		console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// 	});
