import { map } from 'nanostores';
import { browser } from '$app/environment';

export type ScrollValues = {
	scroll: number;
	limit: number;
	velocity: number;
	direction: number;
	progress: number;
};

export const $scroll = map<ScrollValues>({
	scroll: 0,
	limit: 0,
	velocity: 0,
	direction: 0,
	progress: 0
});

if (browser) {
	$scroll.set({
		...$scroll.get(),
		scroll: window.scrollY
	});
}
