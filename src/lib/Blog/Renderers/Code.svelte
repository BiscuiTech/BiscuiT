<script>
	export let code = '';
	export let infostring = '';
	export let escaped = false;
	console.log(code, infostring, escaped);
</script>

<pre class="bg-slate-900 text-gray-50 border border-red-500">
	<slot />
</pre>

<style lang="postcss">
</style>
