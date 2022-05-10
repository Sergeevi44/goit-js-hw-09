import Notiflix from "notiflix";

const refs = {
	submitBtn: document.querySelector('button[type="submit"]'),
	form: document.querySelector(".form"),
};

refs.submitBtn.addEventListener("click", onSubmitBtnClick);

function createPromise(position, delay) {
	return new Promise((resolve, reject) => {
		setInterval(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				resolve(() => {
					console.log("✅ Fulfilled promise");
					return { position, delay };
				}); // Fulfill
			} else {
				reject(`❌ Rejected promise `); // Fulfill// Reject
			}
		}, delay);
	});
}

function onSubmitBtnClick(evt) {
	evt.preventDefault();
	const delay = refs.form.delay.value;
	const step = refs.form.step.value;
	const amount = refs.form.amount.value;
	for (let index = 1; index <= amount; index += 1) {
		console.log(index);
		let time = delay;
		if (index != 1) {
			time = delay + step * index;
		}
		createPromise(index, time)
			.then(({ position, delay }) => {
				console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
			})
			.catch((error) => console.log(error));
	}
	// createPromise(position, delay)
	// 	.then((result) => console.log(result))
	// 	.catch((err) => console.log(err));
}

// createPromise(2, 1500)
// 	.then(({ position, delay }) => {
// 		console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// 	})
// 	.catch(({ position, delay }) => {
// 		console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// 	});
