import 'svelte-jsx';
import { compile } from '@mdx-js/mdx';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const slug = event.params.slug;

	const res = await event.fetch(`/blog/${slug}.json`);
	const json = await res.json();
	const post = json.body;

	// before returning post, compile and evaluate the code
	const component = String(await compile(post.html, {
		jsxImportSource: 'svelte-jsx',
		outputFormat: 'function-body',
	}))

	return {
		post,
		component
	};
}