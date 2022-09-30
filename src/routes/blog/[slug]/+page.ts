/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ fetch, page }) {
	const slug = page.params.slug;
	const res = await fetch(`/blog/${slug}.json`);

	return {
		post: await res.json()
	};
}
