import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const refs = {
	startBtn: document.querySelector("[data-start]"),
	days: document.querySelector("[data-days]"),
	hours: document.querySelector("[data-hours]"),
	minutes: document.querySelector("[data-minutes]"),
	seconds: document.querySelector("[data-seconds]"),
};
const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		// console.log(selectedDates[0]);
		if (selectedDates[0].getTime() < Date.now()) {
			return Notiflix.Notify.failure(
				"Please choose a date in the future"
			);
		}
		refs.startBtn.disabled = false;
	},
};
const selectedTime = flatpickr("#datetime-picker", options);

refs.startBtn.disabled = true;
refs.startBtn.addEventListener("click", onStartBtnClick);

function onStartBtnClick() {
	refs.startBtn.disabled = true;
	const timer = setInterval(() => {
		const differenceTime =
			selectedTime.selectedDates[0].getTime() - Date.now();
		if (differenceTime <= 0) {
			clearInterval(timer);
			return;
		}
		refs.days.textContent = addLeadingZero(convertMs(differenceTime).days);
		refs.hours.textContent = addLeadingZero(
			convertMs(differenceTime).hours
		);
		refs.minutes.textContent = addLeadingZero(
			convertMs(differenceTime).minutes
		);
		refs.seconds.textContent = addLeadingZero(
			convertMs(differenceTime).seconds
		);
	}, 1000);
}
function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
	return String(value).padStart(2, 0);
}
