<script>
	import CoverImage from '$lib/Blog/CoverImage.svelte';
	import H1 from '$lib/Blog/Renderers/H1.svelte';
	import { format, parseISO } from 'date-fns';
	import { run } from '@mdx-js/mdx';
	/** @type {import('./$types').PageData} */
	export let data;
	let { post } = data;
	let getContent = async () => {
		let { default: Content } = await run(post.content, {
			components: {
				h1: H1
			}
		});
		console.log(Content);
		return Content;
	};
</script>

<svelte:head>
	<link href="/themes/dracula.css" rel="stylesheet" />
</svelte:head>
<article class="relative">
	<header class="border-b border-yellow-400 p-4">
		<CoverImage
			title={post.title}
			src={post.coverImage.url}
			accreditation={post.coverImage.accreditation}
		/>
		<H1>{post.title}</H1>
		<div class="text-base text-gray-300 mt-2">
			{`${post.author} | `}
			<time dateTime={post.publishedOn}>{format(parseISO(post.publishedOn), 'LLLL	d, yyyy')}</time>
		</div>
	</header>
	<div class="blog-content text-lg">
		<!-- {post.html()} -->
		{#await getContent then content}
			{@html content.default}
		{/await}
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
