<script lang="ts">
	import LatestBlog from '$lib/LatestBlog/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="mx-auto w-full md:w-4/5 lg:w-4/5 pt-20">
	<div class="welcome">
		<h1 class="welcome--hello">
			'welcome_msg'
			<br />
			<span class="welcome--my-name">Jean-Cédric Huet</span>
		</h1>
		<p class="welcome--from">'i_am'</p>
	</div>
	<div class="short-intro">
		<p>'short_intro'</p>
		<a href="/about" class="styled-anchor toRight">'aboutMe'</a>
	</div>
	<LatestBlog />
</div>

<style>
	.welcome {
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		text-align: left;
		margin-bottom: 64px;
		padding: 0;
		font-family: 'Montserrat';
		font-weight: 200;
	}
	.welcome > * {
		padding: 0;
	}
	.welcome--hello {
		font-size: 28px;
		font-size: max(30px, min(3vh, 38px));
	}
	.welcome--my-name {
		font-size: 42px;
		font-size: max(40px, min(6vh, 72px));
		font-weight: 800;
		line-height: 100%;
	}
	.welcome--from {
		font-size: 20px;
		font-size: max(18px, min(4vh, 24px));
		width: 100%;
		min-width: 230px;
		margin: 0;
		word-wrap: break-word;
	}
	.short-intro {
		width: 100%;
		text-align: left;
		font-size: 20px;
		font-size: max(18px, min(4vh, 24px));
		text-justify: auto;
		overflow: auto;
	}
	.toRight {
		margin-right: 6px;
		float: right;
	}
	.styled-anchor {
		--backgroundColor: #fbb03b;
		position: relative;
		text-decoration: none;
		color: white;
		font-weight: 400;
		font-family: 'Montserrat';
		text-transform: lowercase;
		cursor: pointer;

		font-style: normal;
		font-variant: small-caps;
		color: white;
		padding: 2px 4px;
		background: linear-gradient(
			125.95deg,
			hsl(209, 100%, 49%) 0%,
			hsl(187, 71%, 50%) 50%,
			hsl(34, 100%, 50%) 100%
		);
		background-position: 0 100%;
		background-repeat: repeat-x;
		background-size: 4px 4px;
		transition: background-size 0.2s, border-radius 0.2s;
	}
	.styled-anchor:hover {
		background-size: 4px 50px;
		border-radius: 5px;
	}
</style>
