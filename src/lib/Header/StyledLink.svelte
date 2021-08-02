<script>
	import { page } from '$app/stores';
	export let linkText, path;
	const current = $page.path === path;
</script>

<a tab-index="0" class:current href={path}>{linkText}</a>

<style>
	a {
		--color-accent: #fbb03b;
		font-size: 20px;
		font-size: max(18px, min(2vw, 22px));
		padding: 12px 0;
		color: white;
		cursor: pointer;
		flex-grow: 2;
		text-align: center;
		font-weight: 400;
		position: relative;
		height: 100%;
		padding-inline: 6px;
	}
	.current {
		font-weight: 600;
		color: black;
		background: #fbb03b;
		height: 100%;
		width: 100%;
	}
	a:focus {
		border: solid 1px var(--color-accent);
	}
</style>
