<script>
	import CoverImage from '$lib/Blog/CoverImage.svelte';
	import H1 from '$lib/Blog/Renderers/H1.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { marked } from 'marked';
	import { format, parseISO } from 'date-fns';
	import Code from '$lib/Blog/Renderers/Code.svelte';
	import Heading from '$lib/Blog/Renderers/Heading.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	let { post } = data;

	const tokens = marked.lexer(post.source);
	marked.walkTokens(tokens, (token) => {
		if (token.type == 'code') {
			// console.log(token);
		}
	});
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
		<SvelteMarkdown
			source={post.source}
			renderers={{
				code: Code,
				// heading(string text, number level, string raw, Slugger slugger)
				heading: Heading
			}}
		/>
	</div>
</article>

<style>
	header {
		background-color: hsl(200, 100%, 4%);
	}
	.blog-content {
		font-family: Inter;
		/* padding: 0 1em; */
	}
</style>
