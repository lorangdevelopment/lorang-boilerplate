<script lang="ts">
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<section class="error overflow-hidden position-relative">
	<div class="error__row" style="--text-color: #ffffff; --bg-color: #000000;">
		<div class="error__scroll-content">
			<div class="sr-only">
				<h1>{$page.status}: {$page.error?.message ?? 'An error occurred'}</h1>
			</div>
			<div class="error__content">
				<div class="error__message tt-uppercase --large --forwards">
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
				</div>
				<div class="error__message tt-uppercase --small --backwards">
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
				</div>
				<div class="error__message tt-uppercase --large --backwards">
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
				</div>
				<div class="error__message tt-uppercase --small  --forwards">
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
				</div>
				<div class="error__message tt-uppercase --large --forwards">
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
				</div>
				<div class="error__message tt-uppercase --small  --backwards">
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
					<div>{$page.status}: {$page.error?.message ?? 'An error occurred'}</div>
				</div>
			</div>
		</div>
	</div>
</section>

