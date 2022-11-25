import 'svelte-jsx';
import { compile } from '@mdx-js/mdx';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const slug = event.params.slug;
	// const postPromise = await import(`../../../content/blog/${slug}/en.md`);
	// console.log('postPromise', postPromise);
	// const content = readFileSync(`${resolve}./src/content/blog/${slug}/en.md`, {
	// 	encoding: 'utf8',
	// });
	// const content = await fetch(`/blog/${slug}.json`).then(res => res.json());
	// console.log(content);

	const res = await event.fetch(`/blog/${slug}.json`);
	const json = await res.json();
	// console.log(json);
	const post = json.body;
	// console.log(res);

	// before returning post, compile and evaluate the code
	const Content = String(await compile(post, {
		jsxImportSource: 'svelte-jsx',
		// outputFormat: 'function-body'
	}))
	console.log(Content);

	return {
		post: {
			...post,
			html: (Content as any).html,
		},
		component: Content
	};
}

// export async function load({ params, fetch }) {
// 	const postPromise = await import(`../../../content/blog/${params.slug}/en.md`);
// 	const pagePromise = await import(`../../../content/blog/${params.slug}/en.md`);
// 	const [postResult, pageResult] = await Promise.all([
// 		postPromise,
// 		pagePromise,
// 	]);
// 	const { default: body, ...attributes } = postResult
// 	const { default: page } = pageResult
// 	if (!body) {
// 		return {
// 			status: 404,
// 		};
// 	}

// 	return {
// 		post: {
// 			...attributes,
// 			component: body
// 		},
// 		page
// 	}
// }