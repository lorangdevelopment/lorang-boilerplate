import { readable } from 'svelte/store';
import { format, toZonedTime } from 'date-fns-tz';

function getTime() {
	const now = new Date();
	const sydneyTimezone = 'Australia/Sydney';
	const sydneyDateTime = toZonedTime(now, sydneyTimezone);
	return format(sydneyDateTime, 'HH:mm:ss', { timeZone: sydneyTimezone });
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
