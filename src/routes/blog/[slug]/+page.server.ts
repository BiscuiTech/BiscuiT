import { getPosts } from '$lib/Blog/api';
import type { PageServerLoadEvent } from './$types';

const posts = getPosts();
export const prerender = true;

export async function load(event: PageServerLoadEvent) {
	const slug = event.params.slug;

	const post = posts.find(el => el.slug === slug)

	return {
		post,
	};
}
