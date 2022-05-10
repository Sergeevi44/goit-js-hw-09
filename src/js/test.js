const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const canFulfill = Math.random() > 0.5;
		if (canFulfill) {
			resolve("✅ Fulfilled promise");
		}
		reject("❌ Rejected promise");
	}, 2000);
});

promise
	.then((result) => {
		console.log("Then log");
		console.log(result);
	})
	.catch((error) => {
		console.log("Catch log");
		console.log(error);
	});
