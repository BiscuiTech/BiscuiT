<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.postcss';

	import { addMessages, init } from 'svelte-intl-precompile';
	import en from '$locales/en';
	import es from '$locales/es';
	addMessages('en', en);
	addMessages('es', es);
	init({
		initialLocale: 'en',
		fallbackLocale: 'en'
	});
</script>

<div class="page">
	<Header />
	<main>
		<slot />
	</main>
</div>

<Footer />

<style>
	main {
		width: 90%;
		max-width: 1000px;
		margin: auto;
		margin-bottom: 60px;
		margin-top: 60px;
	}
	@media (min-width: 880px) {
		main {
			padding-top: 60px;
			margin-top: unset;
		}
	}
	.page {
		min-height: 100vh;
		padding: 0;
		position: relative;
		margin: 0;
		background: hsl(200, 100%, 5%);
		background-image: url('/images/topography.svg');
		border-bottom: 3px solid #fbb03b;

		overflow: hidden;
		overflow-y: auto;
		z-index: 1;
	}
	.skip-link {
		position: absolute;
		top: -40px;
		left: 0;
		color: white;
		padding: 8px;
		z-index: 100;
	}
	.skip-link:focus {
		top: 0;
	}
</style>
