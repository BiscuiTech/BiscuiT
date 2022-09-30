import 'svelte-jsx';


// /** @type {import('./$types').PageServerLoad} */
// export async function load(event) {
// 	const slug = event.params.slug;
// 	const res = await event.fetch(`/blog/${slug}.json`);
// 	const json = await res.json();
// 	// console.log(json);
// 	const post = json.body;
// 	// before returning post, compile and evaluate the code
// 	const Content = await compile(post.html, {
// 		jsxImportSource: 'svelte-jsx',
// 	})
// 	console.log(Content);

// 	return {
// 		post: {
// 			...post,
// 			html: Content.value
// 		}
// 	};
// }

export async function load({ params, fetch }) {
	const postPromise = await import(`../../../content/blog/${params.slug}/en.svx`);
	const pagePromise = await import(`../../../content/blog/${params.slug}/en.svx`);
	const [postResult, pageResult] = await Promise.all([
		postPromise,
		pagePromise,
	]);
	const { default: body, ...attributes } = postResult
	const { default: page } = pageResult
	if (!body) {
		return {
			status: 404,
		};
	}

	return {
		post: {
			...attributes,
			component: body
		},
		page
	}
}