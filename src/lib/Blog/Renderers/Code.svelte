<script>
	import { marked } from 'marked';
	import Prism from 'prismjs';
	export let code = '';
	export let infostring = '';
	export let escaped = false;
	export let lang;
	export let text;
	export let raw;

	const RE = /{([\d,-]+)}/;

	function calculateLinesToHighlight(meta) {
		if (RE.test(meta)) {
			const lineNumbers = RE.exec(meta)[1]
				.split(',')
				.map((v) => v.split('-').map((y) => parseInt(y, 10)));
			return (index) => {
				const lineNumber = index + 1;
				const inRange = lineNumbers.some(([start, end]) =>
					end ? lineNumber >= start && lineNumber <= end : lineNumber === start
				);
				return inRange;
			};
		} else {
			return () => false;
		}
	}

	const html = marked
		.walkTokens(marked.lexer(raw), (token) => {
			const shouldHighlightLine = calculateLinesToHighlight(token.lang);
			return text.split('\n').map((line, i) => {
				const html = `<span class="line-number"  data-line-number=${i + 1}></span>${Prism.highlight(
					line,
					Prism.languages['javascript']
				)}</div>`;
				// return html;
				return `<div class="code-line ${
					shouldHighlightLine(i) ? 'highlight-line' : ''
				}">${html}</div>`;
			});
		})
		.reduce((acc, line) => `${acc ? `${acc}\n` : acc}${line}`, '');
</script>

<pre class="bg-slate-900 py-4 px-2 my-4 text-gray-50 rounded-lg overflow-x-auto text-base">
	<code>
		{@html html}
	</code>
</pre>

<style lang="postcss">
	pre,
	code {
		font-family: MonoLisa, Consolas, Monaco, monospace;
	}
	.code-line {
		display: inline-block;
		width: 100%;
		margin: 0;
		padding: 0;
	}
</style>
