<script lang="ts">
	import { PrismicRichText, PrismicLink } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.ApproachSliceSlice;
</script>

<section
	class="approach-slice position-relative"
	data-scroll
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="approach-row pl-15 pr-15">
		<div class="approach-row__title h2__title">
			<PrismicRichText field={slice.primary.title} />
		</div>
		<div class="approach-row__paragraph">
			<PrismicRichText field={slice.primary.paragraph} />
		</div>
		<div class="approach-row__cta btn-underline --has-underline ff-mono tt-uppercase">
			<PrismicLink field={slice.primary.cta_link}>
				{slice.primary.cta_link_label}
				<svg viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg"
					><path
						d="M5.79 2.75c.207-.427.4-.747.58-.96H.54v-.42h5.83c-.18-.213-.373-.533-.58-.96h.35c.42.487.86.847 1.32 1.08v.18c-.46.227-.9.587-1.32 1.08h-.35z"
						fill="currentColor"
					></path></svg
				>
			</PrismicLink>
		</div>
		<div class="approach-row__content">
			<div class="approach-row__content-inner">
				<div class="approach-row__content-title ff-mono tt-uppercase">
					<PrismicRichText field={slice.primary.content_title} />
				</div>
				<div class="approach-row__content-paragraph">
					<PrismicRichText field={slice.primary.content_paragraph} />
				</div>
			</div>
			<div class="approach-row__content-inner">
				<div class="approach-row__content-title ff-mono tt-uppercase">
					<PrismicRichText field={slice.primary.content_title_second} />
				</div>
				<div class="approach-row__content-paragraph">
					<PrismicRichText field={slice.primary.content_paragraph_second} />
				</div>
			</div>
		</div>
	</div>
	<div class="row-spacer ml-15 mr-15 is-inview" data-scroll></div>
</section>
