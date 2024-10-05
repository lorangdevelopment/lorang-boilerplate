<script lang="ts">
	import type { Content } from '@prismicio/client';

	export let slice: Content.FeaturedTextSlice;
</script>

<section
	class="featuredtext-section mb-60 mb-lg-70 position-relative"
	data-scroll
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="row-featured pl-15 pr-15">
		<div class="row-featured__title h2__title">
			<h2>Reinvention</h2>
		</div>
		<div class="row-featured__paragraph">
			<div>
				<h5>
					Nightjar is a digital product company based in Sydney, working with partners
					internationally. We align with ambitious businesses, and startups to innovate,
					adapt and grow in order to navigate today’s disruption at the pace required to
					stay ahead of the curve.
				</h5>
				<h5>
					We define and shape brands, refine UX pathways, craft thoughtful experience
					design systems & engineer high-performing web platforms and mobile apps. This
					unification and passion of disciplines is not only what fuels our team of
					experts, but what delivers impactful, results-driven work for our partner’s
					businesses.
				</h5>
			</div>
		</div>
		<div class="row-featured__cta btn__underline --has__underline ff-mono tt-uppercase">
			<a href="/">
				View Case Study
				<svg viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg"
					><path
						d="M5.79 2.75c.207-.427.4-.747.58-.96H.54v-.42h5.83c-.18-.213-.373-.533-.58-.96h.35c.42.487.86.847 1.32 1.08v.18c-.46.227-.9.587-1.32 1.08h-.35z"
						fill="currentColor"
					></path></svg
				>
			</a>
		</div>
	</div>
</section>
