<script lang="ts">
	import { page } from '$app/stores';
	import StyledLink from './StyledLink.svelte';
	import logo from './svelte-logo.svg';
	const links = [
		{ tKey: 'navigation_Home', path: '/', text: 'Home' },
		{ tKey: 'navigation_Blog', path: '/blog', text: 'Blog' },
		{ tKey: 'navigation_About', path: '/about', text: 'About' },
		{ tKey: 'navigation_Uses', path: '/uses', text: 'Uses' },
		// { tKey: 'navigation_Projects', path: '/projects', text: "Projects },
		{ tKey: 'navigation_Contact', path: '/contact', text: 'Contact' }
	];
</script>

<header>
	<nav>
		<ul>
			{#each links as link}
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
	}
	li {
		text-decoration: none;
		list-style: none;
		padding-inline: 6px;
	}
	.nav-selected {
		background: black;
		height: 100%;
		width: 100%;
		position: absolute;
		bottom: 0;
		z-index: -1;
	}
</style>
