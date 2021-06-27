<script>
	export let accreditation;
	export let src;
	export let title;
</script>

<div class="flex justify-center flex-col">
	<img {src} alt={`Cover Image for ${title}`} loading="lazy" class="pb-0" />
	<em class="text-base text-gray-400">
		<!-- {t('coverImage_pictureBy')}{' '} -->
		picture by
		<a class="underline" href={src}>
			{accreditation}
		</a>{' '}
		<!-- {t('coverImage_on')}{' '} -->cover image
		<a class="underline" href={src}> Unplash </a>
	</em>
</div>

<style>
	div {
		background-color: hsl(200, 100%, 4%);
	}
</style>
