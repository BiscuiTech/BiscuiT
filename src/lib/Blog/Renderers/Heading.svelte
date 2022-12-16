<script>
	export let depth;
	export let raw;
	export let text;
	const id = text ? `id="${text}"` : '';
</script>

{#if depth === 1}
	<h1 class="text-5xl font-medium px-0 pt-6 pb-2 sm:text-3xl md:text-3xl" {id}>
		<slot />
	</h1>
{:else if depth === 2}
	<h2
		class="text-3xl mb-4 py-2 pl-4 font-semibold tracking-wide bg-gray-900 border-yellow-400 border-l-4"
		{id}
	>
		<slot />
	</h2>
{:else if depth === 3}
	<h3
		class="text-2xl my-8 px-0 md:pl-4 font-md tracking-wide bg-gray-900 border-l-2 border-yellow-400"
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

<style>
	/*

  h1 {
		@apply text-5xl font-medium px-0 pt-6 pb-2 sm:text-3xl md:text-3xl;
	}
	h2 {
		@apply text-3xl mt-6 mb-2 py-2 pl-4 font-semibold tracking-wide bg-gray-900 border-yellow-400 border-l-4;
		margin-block: 1em;
	}
	h3 {
		@apply text-2xl m-8 px-0 md:pl-4 tracking-wide bg-gray-900 border-l-2 border-yellow-400;
		margin-block: 2em;
	}
	h4 {
		margin-block: 1em;
	}
  */
</style>
