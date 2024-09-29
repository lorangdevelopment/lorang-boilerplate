import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies, params }) {
	const client = createClient({ fetch, cookies });

	const settings = await client.getSingle('settings', {
		lang: params.lang || 'en-us'
	});

	const page = await client.getByUID('page', 'home', {
		lang: params.lang
	});

	return {
		settings,
		page,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export function entries() {
	return [{}];
}
