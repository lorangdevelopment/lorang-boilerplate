<script lang="ts">
	import { onMount } from 'svelte';
	import { time } from '$lib/scripts/utils/clock';
	import { PrismicRichText, PrismicLink } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.HeroSlice;

	let resetKey = 0;

	onMount(() => {
		const resetAnimation = () => {
			resetKey += 1;
			setTimeout(resetAnimation, 16200);
		};

		setTimeout(resetAnimation, 16200);
	});
</script>

<section
	class="hero hero--home mb-60 mb-lg-70 position-relative"
	data-scroll
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="hero__row grid-column-md-12 pl-15 pr-15">
		<span class="hero__title m-0">
			<PrismicRichText field={slice.primary.title} />
		</span>
		<span class="hero__paragraph">
			<PrismicRichText field={slice.primary.paragraph} />
		</span>
		<span class="hero__time ff-mono tt-uppercase" style="font-size:10px;">
			<span>{slice.primary.time_location} {$time}</span>
		</span>
		<div class="hero__news">
			<div class="hero__news-pagination">
				{#key resetKey}
					<span class="hero__news-line-wrap">
						<span class="hero__news-line"></span>
					</span>
					<span class="hero__news-line-wrap">
						<span class="hero__news-line"></span>
					</span>
					<span class="hero__news-line-wrap">
						<span class="hero__news-line"></span>
					</span>
				{/key}
			</div>
			<div class="hero__news-content ff-mono tt-uppercase">
				{#key resetKey}
					<PrismicLink field={slice.primary.news_link}>
						{slice.primary.news_link_label}
					</PrismicLink>
					<PrismicLink field={slice.primary.news_link_second}>
						{slice.primary.news_link_second_label}
					</PrismicLink>
					<PrismicLink field={slice.primary.news_link_third}>
						{slice.primary.news_link_third_label}
					</PrismicLink>
				{/key}
			</div>
		</div>
	</div>
	<div
		class="case-study grid-row-1 grid-column-2 grid-row-md-1 grid-column-md-12 pl-15 pr-15 --has-bg --has-text-color"
		style="--text-color: #ffffff; --bg-color: #000000;"
	
	>
		<div class="case-study__media-wrap">
			<div class="case-study__media">
				<video
					class="case-study__video"
					src="/Nightjar-Digital-Product-Company.mp4"
					autoplay
					muted
					loop
					playsinline
					data-scroll
				></video>
			</div>
		</div>
		<div class="case-study__tagline ff-mono tt-uppercase">{slice.primary.tagline}</div>
		<div class="case-study__info ff-mono tt-uppercase">{slice.primary.info}</div>
		<div class="case-study__brand ff-mono tt-uppercase">{slice.primary.brand}</div>
		<div class="case-study__cta btn-underline --has-underline ff-mono tt-uppercase">
			<PrismicLink field={slice.primary.cta_link}>
				{slice.primary.cta}
				<svg viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg"
					><path
						d="M5.79 2.75c.207-.427.4-.747.58-.96H.54v-.42h5.83c-.18-.213-.373-.533-.58-.96h.35c.42.487.86.847 1.32 1.08v.18c-.46.227-.9.587-1.32 1.08h-.35z"
						fill="currentColor"
					></path></svg
				>
			</PrismicLink>
		</div>
	</div>
</section>
