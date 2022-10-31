<script>
	import H1 from '$lib/Blog/Renderers/H1.svelte';
	import CoverImage from '$lib/Blog/CoverImage.svelte';
	import * as Components from '$lib/Blog/Renderers';
	import { format, parseISO } from 'date-fns';
	/** @type {import('./$types').PageData} */
	export let data;
	let { post } = data;
	let BlogPost = post.component;
	console.log(data);
</script>

<svelte:head>
	<link href="/themes/dracula.css" rel="stylesheet" />
</svelte:head>
<article class="relative">
	<header class="border-b border-yellow-400 p-4">
		<CoverImage
			title={post.metadata.title}
			src={post.metadata.coverImage.url}
			accreditation={post.metadata.coverImage.accreditation}
		/>
		<H1>{post.metadata.title}</H1>
		<div class="text-base text-gray-300 mt-2">
			{`${post.metadata.author} | `}
			<time dateTime={post.metadata.publishedOn}
				>{format(parseISO(post.metadata.publishedOn), 'LLLL	d, yyyy')}</time
			>
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
