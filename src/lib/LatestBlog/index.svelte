<script>
	export let post;
	import ListItem from '$lib/Blog/ListItem.svelte'
</script>

<div>
	<h2>'latestBlog'</h2>
	{#if post}
		<ListItem {post} />
	{:else}
		<em>{'error_noBlogs'}	</em>
	{/if}
</div>

<style>
	div {
		margin-top: 60px;
		overflow: auto;
		background: hsl(200, 100%, 4.5%);
		padding: 0.6em 1em;
	}
</style>
