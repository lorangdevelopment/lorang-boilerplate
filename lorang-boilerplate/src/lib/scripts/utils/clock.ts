import { readable } from 'svelte/store';
import { format, toZonedTime } from 'date-fns-tz';

function getTime() {
	const now = new Date();
	const timeZone = 'Australia/Sydney';
	const dateTime = toZonedTime(now, timeZone);
	return format(dateTime, 'HH:mm:ss', { timeZone: timeZone });
}

export const time = readable('00:00:00', function start(set) {
	function update() {
		set(getTime());
	}

	update();
	const interval = setInterval(update, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
