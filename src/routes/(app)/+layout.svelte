<script>
	import { Home } from 'svelte-google-materialdesign-icons';
	import MobileNavigation from '$lib/components/MobileNavigation.svelte';
</script>

<main class="w-dvw min-h-dvh h-dvh">
	<div
		class="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-amber-500 opacity-40"
	></div>
	<div class=" w-full relative h-full">
		<div
			class="absolute top-20 mix-blend-lighten -left-40 w-64 h-64 bg-violet-500 rounded-full filter blur-xl opacity-80 animate-blob"
		></div>
		<div
			class="absolute -top-20 mix-blend-lighten -right-40 w-64 h-64 bg-violet-500 rounded-full filter blur-xl opacity-80 animate-blob animation-delay-2000"
		></div>
		<section
			class="bg-[#1A1A2E]/40 text-[#E0E0E0] flex flex-col gap-6 items-center relative h-full"
		>
			<div>
				<div class="w-full flex justify-between items-center py-4">
					<div class="p-2 w-fit bg-gray-900/55 ring-1 ring-slate-800 rounded-lg">
						<img
							class="inline-block h-8 w-8 rounded-md"
							src="https://attic.sh/seb9azzwtqdd0q4qwy784hb3tqi8"
							alt=""
						/>
					</div>
					<div class="relative">
						<button
							type="button"
							class="flex flex-col items-center gap-x-1 text-sm font-semibold leading-6 text-white"
							aria-expanded="false"
						>
							<span class="text-[#E0E0E0]">Location</span>
							<div class="inline-flex text-[#E0E0E0] text-xs items-center gap-x-1 leading-6">
								<span>Karlstad</span>
								<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</button>

						<!--
                      Flyout menu, show/hide based on flyout menu state.
                  
                      Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                      Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1"
                    -->
						<!--					<div class="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">-->
						<!--						<div-->
						<!--							class="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"-->
						<!--						>-->
						<!--							<div class="relative rounded-lg p-4 hover:bg-gray-50">-->
						<!--								<a href="#" class="font-semibold text-gray-900">-->
						<!--									Security-->
						<!--									<span class="absolute inset-0"></span>-->
						<!--								</a>-->
						<!--								<p class="mt-1 text-gray-600">Understand how we take your privacy seriously</p>-->
						<!--							</div>-->
						<!--						</div>-->
						<!--					</div>-->
					</div>

					<button
						type="button"
						class="rounded-lg bg-gray-900/55 p-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
						</svg>
					</button>
				</div>
				<div class="flex items-center justify-evenly w-full gap-2">
					<span
						class="isolate bg-gray-900/55 ring-1 ring-slate-800 border-b border-amber-400 border-opacity-65 px-6 py-2 rounded-xl flex gap-4"
					>
						<button
							type="button"
							class="relative inline-flex items-center tracking-wider rounded-l-md px-3.5 py-2 text-sm font-mediu text-gray-200 focus:z-10"
							>Nearby</button
						>
						<button
							type="button"
							class="relative -ml-px inline-flex items-center tracking-wider px-3.5 py-2 text-sm text-gray-200 focus:z-10"
							>Shared</button
						>
						<button
							type="button"
							class="relative -ml-px inline-flex items-center tracking-wider rounded-r-md px-3.5 py-2 text-sm text-gray-200 focus:z-10"
							>Upcoming</button
						>
					</span>
					<button
						type="button"
						class="rounded-lg border-b border-amber-400 border-opacity-65 bg-gray-900/55 p-4 px-3 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div class="flex justify-center items-center w-full h-[73.5%]">
				<slot />
			</div>
		</section>

		<MobileNavigation />
	</div>
</main>
