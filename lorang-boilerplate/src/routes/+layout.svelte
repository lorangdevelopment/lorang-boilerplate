<script lang="ts">
	import '$lib/styles/app.css';
	import '$lib/styles/utilities.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import { onMount } from 'svelte';
	import { setViewportSize } from '../lib/scripts/utils/setViewportSize';
	import { Transitions } from '../lib/scripts/classes/Transitions';
	import { Scroll } from '../lib/scripts/classes/Scroll';

	// Initialize the Transitions class
	const transitions = new Transitions();
	transitions.init();

	// Initialize the Scroll class
	Scroll.init();

	onMount(() => {
		setViewportSize();
		window.addEventListener('resize', setViewportSize);

		return () => {
			window.removeEventListener('resize', setViewportSize);
		};
	});
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>
<main>
	<!--
		<ul>
		<li><a href="/">English</a></li>
		<li><a href="/fr-fr">French</a></li>
	</ul>

	<h1 style="font-size: {utopiaClamp(24, 48)}">TEST Lorem ipsum dolor sit amet.</h1>
	-->
	<slot />
</main>
<PrismicPreview {repositoryName} />
