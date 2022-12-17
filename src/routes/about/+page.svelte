<script>
	import PageHeader from '$lib/PageHeaders/PageHeader.svelte';
	import SubHeader from '$lib/PageHeaders/SubHeader.svelte';
	import { writable } from 'svelte/store';

	let store = writable({
		subject: '',
		body: ''
	});
</script>

<h1>'pageHeader'</h1>
<h2>'subHeader'</h2>
<section class="overflow-hidden">
	<div class="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
		<div class="relative lg:flex lg:items-center">
			<div class="hidden lg:block lg:flex-shrink-0 lg:self-start">
				<img
					class="h-64 w-64 rounded-full xl:h-80 xl:w-80 object-cover"
					sizes="(max-width: 1400px) 100vw, 1400px"
					srcSet="
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_371.png 371w,
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_602.png 602w,
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_831.png 831w,
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_1011.png 1011w,
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_1400.png 1400w"
					src="/static/images/profile/biscuitech-profile_en4wcw_c_scale,w_1400.png"
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
						<p>'aboutMe'</p>
					</div>
					<footer class="mt-8">
						<div class="flex">
							<div class="flex-shrink-0 lg:hidden">
								<img
									class="h-12 w-12 rounded-full"
									sizes="(max-width: 1400px) 100vw, 1400px"
									srcSet="
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_371.png 371w,
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_602.png 602w,
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_831.png 831w,
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_1011.png 1011w,
                  /static/images/profile/biscuitech-profile_en4wcw_c_scale,w_1400.png 1400w"
									src="biscuitech-profile_en4wcw_c_scale,w_1400.png"
									alt="Mug shot of Jean-Cédric Huet, also known as BiscuiTech"
								/>
							</div>

							<div class="ml-4 lg:ml-0">
								<div class="text-large leading-6 font-medium text-gray-200">Jean-Cédric Huet</div>
								<div class="text-base leading-6 font-medium text-indigo-400">'position'</div>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
		</div>
	</div>
</section>

<div class="my-12 overflow-hidden">
	<div class="px-4 overflow-hidden sm:px-6 lg:px-8">
		<div class="relative max-w-xl mx-auto">
			<svg
				class="absolute left-full transform translate-x-1/4"
				width="404"
				height="404"
				fill="none"
				viewBox="0 0 404 404"
			>
				<defs>
					<pattern
						id="85737c0e-0916-41d7-917f-596dc7edfa27"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-800" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
			</svg>
			<svg
				class="absolute right-full bottom-0 transform -translate-x-1/4"
				width="404"
				height="404"
				fill="none"
				viewBox="0 0 404 404"
			>
				<defs>
					<pattern
						id="85737c0e-0916-41d7-917f-596dc7edfa27"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect x="0" y="0" width="4" height="4" class="text-gray-800" fill="currentColor" />
					</pattern>
				</defs>
				<rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
			</svg>
			<PageHeader>'header'</PageHeader>
			<SubHeader>
				'subHeaderOne'
				<br />
				<b>'subHeaderTwo'</b>
			</SubHeader>
			<div class="mt-12">
				<form
					action={`mailto:tech@biscui.tech`}
					method="get"
					class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
				>
					<div class="sm:col-span-2">
						<label for="subject" class="block text-sm font-medium leading-5 text-gray-200">
							'contactFormSubject'
						</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<input
								id="subject"
								name="subject"
								type="subject"
								class={`py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900 border-gray-900`}
								bind:value={$store.subject}
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="body" class="block text-sm font-medium leading-5 text-gray-200">
							'contactFormBody'
						</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<textarea
								id="body"
								name="body"
								rows={4}
								class={`py-3 px-4 block w-full transition ease-in-out duration-150 bg-gray-900 border-gray-900
								`}
								bind:value={$store.body}
							/>
						</div>
					</div>
					<div class="sm:col-span-2 mb-4 text-center">
						<span class="w-full inline-flex rounded-md shadow-sm">
							<button
								type="submit"
								class="{`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white   focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 border-gray-900 bg-indigo-600 hover:bg-yellow-400`},"
							>
								$status.info.msg || t('contactFormButton')
							</button>
						</span>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		font-family: Montserrat;
		font-size: 36px;
		font-size: max(36px, min(4vh, 56px));
		margin: 24px auto 64px auto;
		text-align: center;
	}
	h2 {
		font-family: 'Montserrat';
		font-size: 24px;
		font-size: min(max(20px, 2vw), 26px);
		font-weight: 200;
		text-align: center;
		margin-top: -64px;
		margin-bottom: 24px;
	}
</style>
