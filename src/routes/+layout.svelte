<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.postcss';
</script>

<div class="background" />
<div class="page">
	<Header />
	<main>
		<slot />
	</main>
</div>

<Footer />

<style>
	main {
		width: 100%;
		max-width: 1000px;
		margin: auto;
		margin-bottom: 60px;
		margin-top: 60px;
	}
	@media (min-width: 880px) {
		main {
			width: 90%;
			padding-top: 60px;
			margin-top: unset;
		}
	}
	.page {
		min-height: 100vh;
		padding: 0;
		position: relative;
		margin: 0;
		background: hsl(200, 70%, 3.5%);
		background-image: url('/images/topography.svg');
		border-bottom: 3px solid #fbb03b;

		overflow: hidden;
		overflow-y: auto;
		z-index: 1;
	}
</style>
