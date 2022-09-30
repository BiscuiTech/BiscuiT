<script lang="ts">
	import StyledLink from './StyledLink.svelte';

	const links = [
		{ tKey: 'navigation_Home', path: '/', text: 'Home' },
		{ tKey: 'navigation_Blog', path: '/blog', text: 'Blog' },
		{ tKey: 'navigation_About', path: '/about', text: 'About' },
		{ tKey: 'navigation_Projects', path: '/projects', text: 'Projects' },
		{ tKey: 'navigation_Contact', path: '/contact', text: 'Contact' }
	];
</script>

<header>
	<nav>
		<ul>
			{#each links as link, i (link)}
				<li>
					<StyledLink path={link.path} linkText={link.text} />
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	nav {
		--contentWidth: 880px;
		--color-accent: #fbb03b;
		background: black;
		position: fixed;
		bottom: 0;
		width: 100%;
		max-width: 1000px;
		height: 60px;
		display: flex;
		border-top: 1px solid var(--color-accent);
		border-bottom: none;
		z-index: 5;
	}

	@media (min-width: 880px) {
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
	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		padding: none;
		margin: none;
		height: 100%;
	}
	li {
		text-decoration: none;
		list-style: none;
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
