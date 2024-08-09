<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	import { isDisplayed, steps } from '$lib/states.svelte';
	import { fly } from 'svelte/transition';

	let slider: HTMLInputElement;
	let timer: number;
	let values = [1500, 12000];

	const currency = new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'SEK',
		maximumFractionDigits: 0
	});
	const formatter = (value) => currency.format(value);

	const stop = () => {
		slider.classList.remove('up', 'down');
	};

	const slide = (e: any) => {
		const delta = -(e.detail.previousValue - e.detail.value);
		if (delta > 0) {
			slider.classList.add('up');
			slider.classList.remove('down');
		} else {
			slider.classList.add('down');
			slider.classList.remove('up');
		}
		clearTimeout(timer);
		timer = setTimeout(stop, 66);
	};
</script>

<ul in:fly={{ x: 300, duration: 350 }} role="list" class=" px-4 flex flex-col ga-4 pb-4">
	<li class="flex flex-col py-4 pb-12 text-black">
		<h1 class="text-2xl font-medium text-[#E0E0E0] py-4">Select price range</h1>
		<h3 class="text-[#B0B0B0] font-medium text-sm">What price range would you like in a flat?</h3>
	</li>
	<li class=" py-4 text-black">
		<RangeSlider
			id="PriceGradient"
			bind:slider
			bind:values
			range
			float
			first={false}
			last={false}
			min={0}
			max={15000}
			step={10}
			pipstep={200}
			{formatter}
			on:change={slide}
			on:stop={stop}
		/>
	</li>
	<li class="flex flex-col py-4 text-black">
		<div class="flex items-center justify-between">
			<span class="flex flex-grow flex-col">
				<span class="text-sm font-medium leading-6 text-[#B0B0B0]" id="availability-label"
					>I want to share a room</span
				>
			</span>
			<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
			<button
				type="button"
				class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-violet-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
				role="switch"
				aria-checked="false"
				aria-labelledby="availability-label"
				aria-describedby="availability-description"
			>
				<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
				<span
					aria-hidden="true"
					class="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-1 ring-amber-400 transition duration-200 ease-in-out"
				></span>
			</button>
		</div>
	</li>
	<li class="flex flex-col py-4 text-black">
		<button
			on:click={() => {
				steps.currentStep++;
			}}
			type="button"
			class="w-full rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
		>
			Next
		</button>
	</li>
</ul>
