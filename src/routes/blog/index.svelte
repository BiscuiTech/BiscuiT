<script context="module">
	import ListItem from '$lib/Blog/List.svelte';
	export async function load() {
		const posts = import.meta.globEager('../../content/blog/**/*.mdx');
		const postsList = Object.values(posts);
		const postsMeta = postsList.map((post) => {
			return post.metadata;
		});
		return { props: { postsMeta } };
	}
</script>

<script>
	export let posts;
	export let postsMeta;
	export let postsList;
</script>

<h1>Articles</h1>
<h2>'subHeader'</h2>
<div class="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
	<div class="relative max-w-lg mx-auto lg:max-w-7xl">
		<div class="mt-6 border-t-2 border-yellow-400 ">
			{#each postsMeta as post}
				<ListItem {post} />
			{/each}
		</div>
	</div>
</div>
