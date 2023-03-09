import { getPosts } from '$lib/Blog/api';
import 'svelte-jsx';

const posts = getPosts();

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const slug = event.params.slug;

	const post = posts.find(el => el.slug === slug)

	return {
		post,
	};
}