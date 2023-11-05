<script lang="ts">
	import StyledLink from './StyledLink.svelte';

	const links = [
		{ tKey: 'navigation_Home', path: '/', text: 'Home' },
		{ tKey: 'navigation_Blog', path: '/blog', text: 'Blog' },
		{ tKey: 'navigation_About', path: '/about', text: 'About' }
	];
</script>

<header>
	<nav class="w-full bottom-0 fixed bg-black h-14 z-10">
		<ul class="flex flex-row justify-evenly w-full p-0 m-0 h-full">
			{#each links as link, i (link)}
				<li class="no-underline list-none relative h-full flex flex-row grow items-center">
					<StyledLink path={link.path} linkText={link.text} />
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	nav {
		--contentWidth: 512px;
		--color-accent: #fbb03b;
		border-top: 1px solid var(--color-accent);
		border-bottom: none;
		width: 100%;
		max-width: 1000px;
	}

	@media (min-width: 512px) {
		nav {
			bottom: unset;
			height: 60px;
			top: 0;
			background: hsl(200, 100%, 5%);
			border-top: none;
			border-bottom: 1px solid var(--color-accent);
			margin: auto;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	@media (min-width: 880px) {
		nav-bkp {
			width: 90%;
		}
	}
</style>
