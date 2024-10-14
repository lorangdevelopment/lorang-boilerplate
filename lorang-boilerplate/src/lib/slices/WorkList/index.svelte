<script lang="ts">
	import { PrismicRichText, PrismicLink, PrismicImage } from '@prismicio/svelte';
	import type { Content } from '@prismicio/client';

	export let slice: Content.WorkListSlice;
</script>

<section
	class="worklist mb-60 mb-lg-70 position-relative"
	data-scroll
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="worklist__row pl-15 pr-15">
		<div class="worklist__row-title h2__title">
			<PrismicRichText field={slice.primary.title} />
		</div>
		<div class="worklist__row-cta btn-underline --has-underline ff-mono tt-uppercase">
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
	</div>
	<div class="worklist__container pl-15 pr-15">
		<div class="worklist__list">
			<div class="worklist__list-item --has-underline position-relative">
				<PrismicLink field={slice.primary.work_link} class="worklist__list-link td-none">
					<div class="worklist__media-wrapper position-relative">
						<div class="worklist__media-container">
							<PrismicImage
								field={slice.primary.work_image}
								class="worklist__media-image"
							/>
						</div>
					</div>
					<div class="worklist__content">
						<div class="worklist__content-title">
							<PrismicRichText field={slice.primary.work_title} />
						</div>
						<div class="worklist__content-description">
							<PrismicRichText field={slice.primary.work_description} />
						</div>
					</div>
				</PrismicLink>

				<div class="row-work-subheading ff-mono tt-uppercase">
					<PrismicLink field={slice.primary.work_cta_link} class="worklist__content-link">
						{slice.primary.work_cta_link_label}
					</PrismicLink>
					<span class="worklist__content-label"
						><PrismicRichText field={slice.primary.work_label} /></span
					>
				</div>
			</div>
		</div>
		<div class="worklist__list">
			<div class="worklist__list-item --has-underline position-relative">
				<PrismicLink
					field={slice.primary.work_link_second}
					class="worklist__list-link td-none"
				>
					<div class="worklist__media-wrapper position-relative">
						<div class="worklist__media-container">
							<PrismicImage
								field={slice.primary.work_image_second}
								class="worklist__media-image"
							/>
						</div>
					</div>
				</PrismicLink>
				<div class="worklist__content">
					<div class="worklist__content-title">
						<PrismicRichText field={slice.primary.work_title_second} />
					</div>
					<div class="worklist__content-description">
						<PrismicRichText field={slice.primary.work_description_second} />
					</div>
				</div>
				<div class="row-work-subheading ff-mono tt-uppercase">
					<PrismicLink
						field={slice.primary.work_cta_link_second}
						class="worklist__content-link"
						>{slice.primary.work_cta_link_label_second}</PrismicLink
					>
					<span class="worklist__content-label"
						><PrismicRichText field={slice.primary.work_label_second} /></span
					>
				</div>
			</div>
		</div>
	</div>
</section>
