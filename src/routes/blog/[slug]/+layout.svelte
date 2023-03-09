<slot />

<style global lang="postcss">
	:root {
		--paragraph-padding: 5em;
	}
	pre,
	code {
		font-family: MonoLisa, Consolas, Monaco, monospace;
	}
	/* code {
		padding: 0.1em 0.5em;
		margin: 0 2px;
		background: hsl(0, 0%, 20%);
		color: hsl(42, 93.2%, 46.1%);
		border-radius: 2px;
		font-size: 0.9em;
		line-height: 1em;
	} */
	/* p,
	ol,
	li {
		margin-block: 1.5em;
		padding-inline: 5em;
	}

	@media (max-width: 768px) {
		p,
		ol,
		ul,
		li {
			padding-inline: 1em;
		}
	} */
	/* p + p,
	ol + ol,
	ul + ul,
	ul + p,
	p + ul,
	ul + ol,
	ol + ul,
	ol + p {
		padding-block: 0em;
	} */

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
	.code-line {
		display: inline-block;
		width: 100%;
		margin: 0;
		padding: 0;
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
