<script>
	import {
		Icon,
		Home,
		BookmarkSquare,
		Map,
		User,
		MapPin,
		ChevronDoubleDown,
		ChevronDown,
		AdjustmentsHorizontal,
		Bell
	} from 'svelte-hero-icons';
	const buttons = [
		{ text: 'Nearby', current: true },
		{ text: 'Shared', current: false },
		{ text: 'Upcoming', current: false }
	];
</script>

<div class=" flex flex-col gap-5 col-span-full">
	<!--  bg-purple-700-->
	<div
		class="bg-black p-4 flex flex-col h-fit mt-2 rounded-xl gap-5 col-span-full bg-opacity-30 backdrop-filter backdrop-blur-lg"
	>
		<section class="flex justify-between">
			<div class="flex flex-col text-gray-200 gap-0.5">
				<div class="text-sm pl-0.5">Location</div>
				<div class="font-bold text-white text-sm flex gap-1">
					<Icon src={MapPin} class="size-5 text-violet-200" />
					New York, USA
					<Icon src={ChevronDown} class="size-5 text-violet-200" />
				</div>
			</div>
			<button
				type="button"
				class="rounded-xl bg-[#1A1A2E]/80 p-1.5 border-b border-amber-400 px-2.5 text-violet-200 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<Icon src={Bell} class="size-5 stroke-violet-200" />
			</button>
		</section>
		<div class="flex items-center w-full justify-evenly gap-2">
			<span
				class="isolate bg-[#1A1A2E]/80 ring-1 w-full justify-evenly ring-slate-800 border-b text-violet-200 border-amber-400 border-opacity-85 py-1 rounded-lg flex gap-3"
			>
				{#each buttons as button, index}
					<button
						type="button"
						class="relative inline-flex items-center tracking-wider px-3.5 py-2 text-sm focus:z-10 {index ===
						0
							? 'rounded-l-md'
							: ''} {index === buttons.length - 1 ? 'rounded-r-md' : '-ml-px'}"
					>
						{#if button.current}
							<span
								class="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1 bg-amber-400 h-1.5 w-1.5 rounded-full"
							></span>
						{/if}
						{button.text}
					</button>
				{/each}
			</span>
			<button
				type="button"
				class="rounded-xl border-b border-amber-400 border-opacity-85 bg-gray-900/55 p-3 px-2.5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<Icon src={AdjustmentsHorizontal} class="size-5 stroke-violet-200" />
			</button>
		</div>
		<!--	</div>-->
	</div>
	<div
		class="h-[calc(100%-15rem)] rounded-xl p-4 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg"
	>
		d
	</div>
</div>
