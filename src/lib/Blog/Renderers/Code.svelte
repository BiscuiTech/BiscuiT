<script>
	import Prism from 'prismjs';
	export let code = '';
	export let infostring = '';
	export let escaped = false;
	export let lang;
	export let text;
	console.log(code, infostring, escaped);
</script>

<pre class="bg-slate-900 my-4 text-gray-50 border ">
	<code>
		{@html Prism.highlight(text, Prism.languages['javascript'])}
	</code>
</pre>

<style lang="postcss">
</style>
