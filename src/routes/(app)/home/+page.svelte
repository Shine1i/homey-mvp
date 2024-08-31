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
		Bell,
		XMark,
		Heart,
		MagnifyingGlass,
		UserGroup,
		Sparkles
	} from 'svelte-hero-icons';
	import SwiperContainer from '$lib/components/app/SwiperContainer.svelte';
	const buttons = [
		{ text: 'Nearby', current: true },
		{ text: 'Shared', current: false },
		{ text: 'Upcoming', current: false }
	];
</script>

<div class=" flex flex-col gap-2.5 col-span-full">
	<!--  bg-stone-50 border-->
	<div
		class=" border-stone-300 p-3 flex flex-col h-fit mt-2 rounded-xl gap-5 col-span-full backdrop-filter backdrop-blur-lg"
	>
		<div class="flex justify-between items-center">
			<!--			<h1 class="curved-text text-xl font-pacifico font-medium tracking-wide text-cyan-400">-->
			<!--				<span>h</span><span>o</span><span>m</span><span class="text-emerald-500">e</span><span-->
			<!--					>y</span-->
			<!--				>-->
			<!--			</h1>-->
			<div class="flex gap-0.5">
				<Icon src={Sparkles} class="size-7 stroke-emerald-800 h-fit" />
				<!--				Discover-->
			</div>
			<span class="isolate inline-flex h-9 rounded-full self-center shadow-sm">
				<button
					type="button"
					class="relative inline-flex items-center bg-gradient-to-r from-emerald-500/80 via-emerald-400/80 via-50% to-emerald-300/80 rounded-l-full bg-white px-6 text-gray-400 ring-1 ring-inset ring-stone-300 ring-opacity-65 hover:bg-gray-50 focus:z-10"
				>
					<Icon src={Home} class="size-5 stroke-emerald-800 h-fit" />
				</button>
				<button
					type="button"
					class="relative -ml-px inline-flex items-center rounded-r-full bg-white px-6 text-gray-400 ring-1 ring-inset ring-stone-300 ring-opacity-65 hover:bg-gray-50 focus:z-10"
				>
					<Icon src={UserGroup} class="size-5 stroke-emerald-800 " />
				</button>
			</span>

			<div class="flex gap-3">
				<!--				<button-->
				<!--					type="button"-->
				<!--					class="rounded-xl ring-1 ring-stone-300 ring-opacity-65 border-opacity-85 p-3 px-2.5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
				<!--				>-->
				<!--					<Icon src={Bell} class="size-5 stroke-stone-800 " />-->
				<!--				</button>-->
				<button
					type="button"
					class="rounded-xl ring-1 ring-stone-300 ring-opacity-65 border-opacity-85 p-3 px-2.5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					<Icon src={AdjustmentsHorizontal} class="size-5 stroke-stone-800" />
				</button>
			</div>
		</div>
		<!--		<section class="flex justify-between">-->
		<!--			<div class="flex flex-col text-stone-800 gap-0.5">-->
		<!--				<div class="text-sm pl-0.5">Location</div>-->
		<!--				<div class="font-bold text-stone-500 text-sm flex gap-1">-->
		<!--					<Icon src={MapPin} class="size-5 text-stone-500" />-->
		<!--					New York, USA-->
		<!--					<Icon src={ChevronDown} class="size-5 text-stone-500" />-->
		<!--				</div>-->
		<!--			</div>-->
		<!--			<button-->
		<!--				type="button"-->
		<!--				class="rounded-xl bg-emerald-400/50 p-1.5 border-b border-emerald-400 px-2.5 text-stone-800 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
		<!--			>-->
		<!--				<Icon src={Bell} class="size-5 stroke-emerald-800" />-->
		<!--			</button>-->
		<!--		</section>-->
		<!--		<div class="flex items-center w-full justify-evenly gap-2">-->
		<!--			<span-->
		<!--				class="isolate bg-emerald-400/50 backdrop-filter backdrop-blur-2xl ring-1 w-full justify-evenly ring-emerald-200 border-b text-stone-800 border-emerald-400 border-opacity-85 py-1 rounded-lg flex gap-3"-->
		<!--			>-->
		<!--				{#each buttons as button, index}-->
		<!--					<button-->
		<!--						type="button"-->
		<!--						class="relative inline-flex items-center tracking-wider px-3.5 py-2 text-sm focus:z-10 {index ===-->
		<!--						0-->
		<!--							? 'rounded-l-md'-->
		<!--							: ''} {index === buttons.length - 1 ? 'rounded-r-md' : '-ml-px'}"-->
		<!--					>-->
		<!--						{#if button.current}-->
		<!--							<span-->
		<!--								class="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1 bg-cyan-100 h-1.5 w-1.5 rounded-full"-->
		<!--							></span>-->
		<!--						{/if}-->
		<!--						{button.text}-->
		<!--					</button>-->
		<!--				{/each}-->
		<!--			</span>-->
		<!--			<button-->
		<!--				type="button"-->
		<!--				class="rounded-xl border-b border-emerald-400 border-opacity-85 bg-emerald-400/50 p-3 px-2.5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
		<!--			>-->
		<!--				<Icon src={AdjustmentsHorizontal} class="size-5 stroke-emerald-800" />-->
		<!--			</button>-->
		<!--		</div>-->
		<!--	</div>-->
	</div>
	<div
		class="h-[calc(100%-11rem)] rounded-xl p-4 bg-stone-50 backdrop-filter backdrop-blur-lg drop-shadow-2xl"
	>
		<SwiperContainer />
	</div>
	<ul class="flex gap-4 justify-center relative bottom-14">
		<li>
			<button
				type="button"
				class="rounded-full bg-stone-50 p-4 text-white shadow-lg shadow-stone-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<Icon src={XMark} class="size-6 stroke-stone-800" />
			</button>
		</li>
		<li>
			<button
				type="button"
				class="rounded-full bg-stone-50 p-4 text-white shadow-lg shadow-stone-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<Icon src={Heart} class="size-7 fill-rose-600 stroke-rose-600" />
			</button>
		</li>
		<li>
			<button
				type="button"
				class="rounded-full bg-stone-50 p-4 text-white shadow-lg shadow-stone-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<Icon src={MagnifyingGlass} class="size-6 stroke-stone-800" />
			</button>
		</li>
		<li></li>
	</ul>
</div>
