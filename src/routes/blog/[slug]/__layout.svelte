<slot />

<style>
	.blog-content {
		font-family: 'Inter';
		padding: 0 1em;
	}
	:global(pre),
	:global(code) {
		font-family: MonoLisa, Consolas, Monaco, monospace;
	}
	:global(code) {
		padding: 0.1em 0.5em;
		margin: 0 2px;
		background: hsl(0, 0%, 20%);
		color: hsl(42, 93.2%, 46.1%);
		border-radius: 2px;
		font-size: 0.9em;
		line-height: 1em;
	}
	:global(p) {
		margin-block: 1.5em;
	}
	p + :global(p) {
		margin-top: -0.5em;
	}
	p :global(a) {
		color: #fbb03b;
		position: relative;
	}
	p :global(a:after) {
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
	:global(a:focus:after),
	:global(a:hover:after) {
		opacity: 1;
		width: 100%;
	}
	li > :global(p) {
		display: inline;
	}
	:global(.highlight-line) {
		background-color: hsl(231, 30%, 25%);
		border-left: 2px solid #fbb03b;
	}
	:global(.bubble) {
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
	.bubble :global(p) {
		padding: 0px;
		margin: 0;
		text-align: left;
		align-self: center;
	}
	:global(.bubble-question):before {
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
	:global(.bubble-exclamation):before {
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
	:global(h2) {
		margin-block: 1em;
	}
	:global(h3) {
		margin-block: 1em;
	}
	:global(h4) {
		margin-block: 1em;
	}
</style>
