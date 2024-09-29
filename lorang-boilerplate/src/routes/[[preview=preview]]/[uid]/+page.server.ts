import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const settings = await client.getSingle('settings', {
		lang: params.lang || 'en-us'
	});

	const page = await client.getByUID('page', params.uid, {
		lang: params.lang || 'en-us'
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

export async function entries() {
	const client = createClient();

	const pages = await client.getAllByType('page');

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
