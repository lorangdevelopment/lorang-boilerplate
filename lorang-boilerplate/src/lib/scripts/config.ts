import type { Config } from '@sveltejs/kit';

const config: Config = Object.freeze({
	// Utopia
	utopia: {
		minViewport: 320,
		maxViewport: 1440,
		rootSize: 16
	}
});

const CUSTOM_EVENTS: {
	RESIZE_END: string;
} = Object.freeze({
	RESIZE_END: 'lorang.resizeEnd'
});

export { config, CUSTOM_EVENTS };
