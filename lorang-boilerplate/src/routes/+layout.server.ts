import { createClient } from '$lib/prismicio';

export async function load({ params, fetch, cookies }) {
    const client = createClient({ fetch, cookies });
    const lang = params.lang || 'en-us';

    const settings = await client.getSingle('settings');
    const header = await client.getSingle('header');
    const footer = await client.getSingle('footer');

    return {
        settings,
        header: header.data,
        footer: footer.data,
        lang
    };
}