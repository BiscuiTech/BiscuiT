// export async function load() {
// 	const posts = import.meta.globEager('../../content/blog/**/*.md');
// 	const postsList = Object.values(posts);
// 	const postsMeta = postsList.map((post) => post.metadata);
// 	return { props: { postsMeta } };
// }
export async function load({ fetch }) {
	try {
		const blog = await fetch(`/blog.json`);
		const posts = await blog.json();
		return { posts: posts.body };
	} catch (error) {
		console.error(error);
	}
}
