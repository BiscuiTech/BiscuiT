<script>
	import PageHeader from '$lib/PageHeaders/PageHeader.svelte';
	import SubHeader from '$lib/PageHeaders/SubHeader.svelte';
	import { writable } from 'svelte/store';

	let store = writable({
		subject: '',
		body: ''
	});
</script>

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
