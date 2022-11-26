<slot />

<style global lang="postcss">
	.blog-content {
		font-family: 'Inter';
		padding: 0 1em;
	}
	h1 {
		@apply text-5xl font-medium px-0 pt-6 pb-2 sm:text-3xl md:text-3xl;
	}
	/* h2 {
		@apply text-3xl mt-6 mb-2 py-2 pl-4 font-semibold tracking-wide bg-gray-900 border-yellow-400 border-l-4;
	} */
	h3 {
		@apply text-2xl mt-4 px-0 md:pl-4 tracking-wide bg-gray-900 border-l-2 border-yellow-400;
	}
	pre,
	code {
		font-family: MonoLisa, Consolas, Monaco, monospace;
	}
	code {
		padding: 0.1em 0.5em;
		margin: 0 2px;
		background: hsl(0, 0%, 20%);
		color: hsl(42, 93.2%, 46.1%);
		border-radius: 2px;
		font-size: 0.9em;
		line-height: 1em;
	}
	p {
		margin-block: 1.5em;
	}
	p + p {
		margin-top: -0.5em;
	}
	p a {
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
	a:focus:after,
	a:hover:after {
		opacity: 1;
		width: 100%;
	}
	li > p {
		display: inline;
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
	h2 {
		margin-block: 1em;
	}
	h3 {
		margin-block: 1em;
	}
	h4 {
		margin-block: 1em;
	}
</style>
