<script>
	// import H1 from './H1.svelte';
	export let depth;
	export let raw;
	export let text;
	const id = text ? `id="${text}"` : '';
</script>

{#if depth === 1}
	<h1 {id}>
		<slot />
	</h1>
{:else if depth === 2}
	<h2
		class="text-2xl mb-4 py-2 pl-4 font-semibold tracking-wide bg-gray-900 border-yellow-400 border-l-4"
		{id}
	>
		<slot />
	</h2>
{:else if depth === 3}
	<h3
		class="text-xl mt-8 mb-2 px-0 py-2 md:pl-4 font-md tracking-wide bg-gray-900 border-l-2 border-yellow-400"
		{id}
	>
		<slot />
	</h3>
{:else if depth === 4}
	<h4 {id}><slot /></h4>
{:else if depth === 5}
	<h5 {id}><slot /></h5>
{:else if depth === 6}
	<h6 {id}><slot /></h6>
{:else}
	{raw}
{/if}
