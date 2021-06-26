<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.postcss';
</script>

<div class="page">
	<Header />
	<main>
		<slot />
	</main>
</div>

<Footer />

<style global="">
	@font-face {
    font-family: 'MonoLisa';
    src: url('/fonts/MonoLisa-Regular.woff2') format('woff2');
    src: url('/fonts/MonoLisa-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'MonoLisa';
    src:url('/fonts/MonoLisa-Bold.woff2') format('woff2');
    src:url('/fonts/MonoLisa-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'MonoLisa';
    src:url('/fonts/MonoLisa-RegularItalic.woff2') format('woff2');
    src:url('/fonts/MonoLisa-RegularItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'MonoLisa';
    src:url('/fonts/MonoLisa-BoldItalic.woff2') format('woff2');
   src: url('/fonts/MonoLisa-BoldItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
  }
  html {
    --scrollbarBG: #CFD8DC;
    --thumbBG: #90A4AE;
    --gold: ${(props) => props.theme.color.gold};
    --blue: ${(props) => props.theme.color.blue};
    --contentWidth: ${(props) => `${props.theme.layout.contentWidth}px`};
    scroll-behavior: smooth;
    height: 100%;
    overflow-x: hidden;
  }
  body {
    padding:0;
    margin:0;
    width: 100%;
    height: 100%;
    height: calc(var(--vh, 1vh) * 100);
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
    font-family: "Inter";
    color: white;
    font-size: max(18px,min(2vw, 24px));
  }
  body::-webkit-scrollbar {
    width: 11px;
  }
  body::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
  }
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 30px;
    font-size: min(max(28px,5vw),54px);
    margin: 0;
    padding: 6px 12px;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 22px;
    font-size: min(max(20px,3vw),24px);

  }
	main {
		/* width: ${fullPage ? '100%' : '90%'}; */
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
		border-bottom: 3px solid #FBB03B;

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
