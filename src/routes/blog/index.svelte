<script context="module" lang="ts">
	import ListItem from '$lib/Blog/List.svelte';
	import type { LoadInput } from '@sveltejs/kit';
	// export async function load() {
	// 	const posts = import.meta.globEager('../../content/blog/**/*.mdx');
	// 	const postsList = Object.values(posts);
	// 	const postsMeta = postsList.map((post) => post.metadata);
	// 	return { props: { postsMeta } };
	// }
	export async function load({ fetch }: LoadInput) {
		try {
			const blog = await fetch(`/blog.json`);
			const posts = await blog.json();

			return { props: { posts } };
		} catch (error) {
			console.error(error);
		}
	}
</script>

<script>
	export let posts;
</script>

<h1>Articles</h1>
<h2>'subHeader'</h2>
<div class="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
	<div class="relative max-w-lg mx-auto lg:max-w-7xl">
		<div class="mt-6 border-t-2 border-yellow-400 ">
			{#each posts as post}
				<ListItem {post} />
			{/each}
		</div>
	</div>
</div>
