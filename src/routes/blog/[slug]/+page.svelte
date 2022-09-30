<script>
	import H1 from '$lib/Blog/Renderers/H1.svelte';
	import CoverImage from '$lib/Blog/CoverImage.svelte';
	import * as Components from '$lib/Blog/Renderers';

	/** @type {import('./$types').PageData} */
	export let data;
	let { post } = data;
	let BlogPost = post.component;
</script>

<svelte:head>
	<link href="/themes/dracula.css" rel="stylesheet" />
</svelte:head>
<article class="relative">
	<header class="border-b border-yellow-400 p-4">
		<!-- <CoverImage
			title={post.title}
			src={post.coverImage.url}
			accreditation={post.coverImage.accreditation}
		/> -->
		<!-- <H1>{post.title}</H1> -->
		<div class="text-base text-gray-300 mt-2">
			<!-- {`${t('blogBy')} ${post.author} | `} -->
			<!-- {DateFormater({ dateString: post.publishedOn })} -->
			author and date
		</div>
	</header>
	<div class="blog-content text-lg">
		<svelte:component this={post.component} />
	</div>
</article>

<style>
	header {
		background-color: hsl(200, 100%, 4%);
	}
	.blog-content {
		font-family: Inter;
		padding: 0 1em;
	}
</style>
