import { browser } from '$app/environment';

let SUPPORTS_VH = false;

if (browser) {
	SUPPORTS_VH =
		'CSS' in window &&
		'supports' in window.CSS &&
		window.CSS.supports('height: 100svh') &&
		window.CSS.supports('height: 100dvh') &&
		window.CSS.supports('height: 100lvh');
}

export const setViewportSize = () => {
	if (!browser) return;

	// Document styles
	const documentStyles = document.documentElement.style;

	// Viewport width
	const vw = document.body.clientWidth * 0.01;
	documentStyles.setProperty('--vw', `${vw}px`);

	// Return if browser supports vh, svh, dvh, & lvh
	if (SUPPORTS_VH) {
		return;
	}

	// Viewport height
	const svh = document.documentElement.clientHeight * 0.01;
	documentStyles.setProperty('--svh', `${svh}px`);

	const dvh = window.innerHeight * 0.01;
	documentStyles.setProperty('--dvh', `${dvh}px`);

	if (document.body) {
		const fixed = document.createElement('div');
		fixed.style.width = '1px';
		fixed.style.height = '100vh';
		fixed.style.position = 'fixed';
		fixed.style.left = '0';
		fixed.style.top = '0';
		fixed.style.bottom = '0';
		fixed.style.visibility = 'hidden';

		document.body.appendChild(fixed);

		const fixedHeight = fixed.clientHeight;

		fixed.remove();

		const lvh = fixedHeight * 0.01;

		documentStyles.setProperty('--lvh', `${lvh}px`);
	}
};
