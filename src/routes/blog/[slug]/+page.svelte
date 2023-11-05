<script>
	import CoverImage from '$lib/Blog/CoverImage.svelte';
	import Code from '$lib/Blog/CustomRenderers/Code.svelte'
	import BlogTitle from '$lib/Blog/BlogTitle.svelte';
	import Heading from '$lib/Blog/CustomRenderers/Heading.svelte';
	import { format, parseISO } from 'date-fns';
	import SvelteMarkdown from '$lib/Blog/SvelteMarkdown/SvelteMarkdown.svelte'

	
	/** @type {import('./$types').PageData} */
	export let data;
	let { post } = data;
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
		<BlogTitle>{post.title}</BlogTitle>
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
				heading: Heading
			}}
		/>
	</div>
</article>

<style lang="postcss">
	header {
		background-color: hsl(200, 100%, 4%);
	}
	.blog-content {
		font-family: Inter;
		font-weight: 300;
	}

	/* CONTENT STYLES HERE */
	:root {
		--paragraph-padding: 5em;
	}

	p,
	em {
		padding-inline: var(--paragraph-padding);
	}
	li {
		list-style-type: disc;
		margin-inline: calc(var(--paragraph-padding) + 1em);
	}
	p a {
		color: #fbb03b;
		position: relative;
	}
	a {
		color: #fbb03b;
		position: relative;
	}
	p a:after {
		content: '';
		position: absolute;
		transition: all 0.25s;
		opacity: 0;
		height: 2px;
		width: 0%;
		bottom: 0;
		left: 0;
		background: #fbb03b;
	}
	a:after {
		content: '';
		position: absolute;
		transition: all 0.25s;
		opacity: 0;
		height: 2px;
		width: 0%;
		bottom: 0;
		left: 0;
		background: #fbb03b;
	}
	p + h2 {
		margin-top: 1em;
	}
	p img {
		margin-inline: auto;
		margin-block: 2em;
	}

	li > code,
	p > code {
		background: hsl(231, 33%, 30%);
		color: #fbb03b;
		padding: 0.1em 0.5em;
		margin: 0 2px;
		border-radius: 4px;
		font-size: 0.9em;
		line-height: 1em;
	}
	a:focus:after,
	a:hover:after {
		opacity: 1;
		width: 100%;
	}
	li > p {
		display: inline;
	}
	strong {
		font-weight: 900;
	}
	.line-number::before {
		content: attr(data-line-number);
		display: inline-block;
		width: 2em;
		text-align: center;
		user-select: none;
		opacity: 0.7;
	}
	.highlight-line {
		background-color: hsl(231, 30%, 25%);
		border-left: 2px solid #fbb03b;
	}
	.bubble {
		display: flex;
		background: hsl(231, 33%, 30%);
		width: 80%;
		margin: 1em auto;
		padding: 4px 2em;
		padding-left: 0px;
		min-height: 4em;
		border: 2px solid #fbb03b;
		border-radius: 8px;
	}
	.bubble p {
		padding: 0px;
		margin: 0;
		text-align: left;
		align-self: center;
	}
	.bubble-question:before {
		content: '?';
		color: hsl(231, 33%, 30%);
		align-self: start;
		padding: 4px;
		margin: auto 6px;
		opacity: 0.6;
		font-size: 3.5em;
		line-height: 1em;
		text-shadow: -1px -1px 0 #fbb03b, 1px -1px 0 #fbb03b, -1px 1px 0 #fbb03b, 1px 1px 0 #fbb03b;
	}
	.bubble-exclamation:before {
		content: '!';
		color: hsl(231, 33%, 30%);
		align-self: start;
		padding: 4px;
		margin: auto 6px;
		opacity: 0.6;
		font-size: 3.5em;
		line-height: 1em;
		text-shadow: -1px -1px 0 #fbb03b, 1px -1px 0 #fbb03b, -1px 1px 0 #fbb03b, 1px 1px 0 #fbb03b;
	}
</style>
