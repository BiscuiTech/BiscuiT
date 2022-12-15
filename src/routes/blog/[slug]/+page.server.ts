import type { Blog } from '$lib/types';
import 'svelte-jsx';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const slug = event.params.slug;

	const res = await event.fetch(`/blog/${slug}.json`);
	const json = await res.json();
	const post: Blog = json.body;

	return {
		post,
	};
}