<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message ?? 'An error occurred'}</title>
</svelte:head>

<div class="sr-only">
	<h1>{$page.status}: {$page.error?.message ?? 'An error occurred'}</h1>
</div>
