<script>
	import CoverImage from '$lib/Blog/CoverImage.svelte';
	import H1 from '$lib/Blog/Renderers/H1.svelte';
	import { run } from '@mdx-js/mdx';
	import { format, parseISO } from 'date-fns';
	import * as jsx from 'svelte-jsx';
	/** @type {import('./$types').PageData} */
	export let data;
	let { post, component } = data;
	let getContent = async () => {
		let { default: payload } = await run(component, { ...jsx });
		return payload;
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
		{#await getContent() then content}
			<svelte:component this={content()} />
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
