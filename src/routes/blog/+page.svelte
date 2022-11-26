<script>
	import ListItem from '$lib/Blog/ListItem.svelte';
	export let data;
	let { posts } = data;
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
