<script>
	import { _ } from 'svelte-i18n';
	import ListItem from '$lib/Blog/ListItem.svelte';
	import PageHeader from '$lib/PageHeaders/PageHeader.svelte';
	import SubHeader from '$lib/PageHeaders/SubHeader.svelte';
	export let data;
	let { posts } = data;
</script>

<PageHeader>Articles</PageHeader>
<SubHeader>
	{$_('blog.subHeader')}
</SubHeader>
<div class="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
	<div class="relative max-w-lg mx-auto lg:max-w-7xl">
		<div class="mt-6 border-t-2 border-yellow-400">
			{#each posts as post}
				<ListItem {post} />
			{/each}
		</div>
	</div>
</div>
