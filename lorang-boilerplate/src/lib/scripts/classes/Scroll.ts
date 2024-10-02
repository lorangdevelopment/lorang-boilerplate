import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { $scroll } from '../stores/scroll';

import LocomotiveScroll, {
	type lenisTargetScrollTo,
	type ILenisScrollToOptions
} from 'locomotive-scroll';

export class Scroll {
	static locomotiveScroll: LocomotiveScroll;

	// =============================================================================
	// Lifecycle
	// =============================================================================
	static init() {
		onMount(async () => {
			if (browser) {
				this.locomotiveScroll = new LocomotiveScroll({
					scrollCallback({ scroll, limit, velocity, direction, progress }) {
						$scroll.set({
							scroll,
							limit,
							velocity,
							direction,
							progress
						});
					}
				});
			}
		});
	}

	static destroy() {
		if (browser && this.locomotiveScroll) {
			this.locomotiveScroll.destroy();
		}
	}

	// =============================================================================
	// Methods
	// =============================================================================

	static start() {
		if (browser && this.locomotiveScroll) {
			this.locomotiveScroll.start();
		}
	}

	static stop() {
		if (browser && this.locomotiveScroll) {
			this.locomotiveScroll.stop();
		}
	}

	static addScrollElements(container: HTMLElement) {
		if (browser && this.locomotiveScroll) {
			this.locomotiveScroll.addScrollElements(container);
		}
	}

	static removeScrollElements(container: HTMLElement) {
		if (browser && this.locomotiveScroll) {
			this.locomotiveScroll.removeScrollElements(container);
		}
	}

	static scrollTo(target: lenisTargetScrollTo, options?: ILenisScrollToOptions) {
		if (browser && this.locomotiveScroll) {
			this.locomotiveScroll.scrollTo(target, options);
		}
	}
}
