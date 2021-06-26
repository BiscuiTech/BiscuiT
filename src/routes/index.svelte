<script context="module" lang="ts">
	export const prerender = true;
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
		<p class="welcome--from">{t('i_am')}</p>
	</div>
	<div class="short-intro">
		<p>'short_intro'</p>
		<LocaleLink href="/about" as={`/about`} passHref>
			<StyledAnchor class="toRight">'aboutMe'</StyledAnchor>
		</LocaleLink>
	</div>
	<LatestBlog {post} />
</div>

<style>
	.welcome {
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		text-align: left;
		/* margin-top: 24px; */
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
	}
</style>
