<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
  
  $: if ($page.error) {
    if (browser) {
      document.documentElement.setAttribute('data-theme', 'black');
    }
  } else {
    if (browser) {
      document.documentElement.removeAttribute('data-theme');
    }
  }
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<section class="error overflow-hidden position-relative">
	<div class="error__row" style="--text-color: #ffffff; --bg-color: #000000;">
		<div class="error__scroll-content">
			<div class="sr-only">
				<h1>Page not found</h1>
			</div>
			<div class="error__content">
				<div class="error__message tt-uppercase --large --forwards">
					<div>Page not found</div>
					<div>Page not found</div>
				</div>
				<div class="error__message tt-uppercase --small --backwards">
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
				</div>
				<div class="error__message tt-uppercase --large --backwards">
					<div>Page not found</div>
					<div>Page not found</div>
				</div>
				<div class="error__message tt-uppercase --small --forwards">
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
				</div>
				<div class="error__message tt-uppercase --large --forwards">
					<div>Page not found</div>
					<div>Page not found</div>
				</div>
				<div class="error__message tt-uppercase --small --backwards">
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
					<div>Page not found</div>
				</div>
			</div>
		</div>
	</div>
</section>