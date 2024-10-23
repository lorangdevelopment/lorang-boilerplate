<script lang="ts">
	import { PrismicRichText, PrismicLink } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.FeaturedTextSlice;
</script>

<section
	class="featured-text position-relative"
	data-scroll
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="featured-text__row pl-15 pr-15">
		<div class="featured-text__row-title h2__title">
			<PrismicRichText field={slice.primary.title} />
		</div>
		<div class="featured-text__row-cta btn-underline --has-underline ff-mono tt-uppercase">
			<PrismicLink field={slice.primary.cta_link}>
				{slice.primary.cta_link_label}
				<svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z" fill="currentColor"></path></svg>
			</PrismicLink>
		</div>
		<div class="featured-text__row-paragraph">
			<div>
				<h5>
					<PrismicRichText field={slice.primary.paragraph} />
				</h5>
				<h5>
					<PrismicRichText field={slice.primary.paragraph_second} />
				</h5>
			</div>
		</div>
	</div>
	<div class="row-spacer ml-15 mr-15" data-scroll></div>
</section>
