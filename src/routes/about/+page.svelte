<script>
	import { _ } from 'svelte-i18n'
	import PageHeader from '$lib/PageHeaders/PageHeader.svelte';
	import SubHeader from '$lib/PageHeaders/SubHeader.svelte';

</script>
<PageHeader>{$_('about.pageHeader')}</PageHeader>
<SubHeader >{$_("about.subHeader")} </SubHeader>
<section class="overflow-hidden">
	<div class="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
		<div class="relative lg:flex lg:items-center">
			<div class="hidden lg:block lg:flex-shrink-0 lg:self-start">
				<img
					class="h-64 w-64 rounded-full xl:h-80 xl:w-80 object-cover"
					sizes="(max-width: 1400px) 100vw, 1400px"
					srcSet="
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_371.png 371w,
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_602.png 602w,
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_831.png 831w,
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_1011.png 1011w,
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_1400.png 1400w"
					src="/images/profile/biscuitech-profile_en4wcw_c_scale,w_1400.png"
					alt="profilePictureAlt"
				/>
			</div>

			<div class="relative lg:ml-10">
				<svg
					class="absolute top-0 transform -translate-x-4 -translate-y-24 left-0 h-36 w-36 text-indigo-200 opacity-50"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 144 144"
				>
					<path
						stroke-width="2"
						d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
					/>
				</svg>
				<blockquote>
					<div class="text-xl leading-9 font-medium text-gray-200">
						<p>{$_('about.aboutMe')}</p>
					</div>
					<footer class="mt-8">
						<div class="flex">
							<div class="flex-shrink-0 lg:hidden">
								<img
									class="h-12 w-12 rounded-full"
									sizes="(max-width: 1400px) 100vw, 1400px"
									srcSet="
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_371.png 371w,
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_602.png 602w,
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_831.png 831w,
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_1011.png 1011w,
                  /images/profile/biscuitech-profile_en4wcw_c_scale,w_1400.png 1400w"
									src="biscuitech-profile_en4wcw_c_scale,w_1400.png"
									alt="Mug shot of Jean-Cédric Huet, also known as BiscuiTech"
								/>
							</div>

							<div class="ml-4 lg:ml-0">
								<div class="text-large leading-6 font-medium text-gray-200">Jean-Cédric Huet</div>
								<div class="text-base leading-6 font-medium text-indigo-400">{$_('about.position')}</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
		</div>
	</div>
</section>

<style>
	h1 {
		font-family: 'Inter';
		font-size: 36px;
		font-size: max(36px, min(4vh, 56px));
		margin: 24px auto 64px auto;
		text-align: center;
	}
	h2 {
		font-family: 'Inter';
		font-size: 24px;
		font-size: min(max(20px, 2vw), 26px);
		font-weight: 200;
		text-align: center;
		margin-top: -64px;
		margin-bottom: 24px;
	}
</style>
