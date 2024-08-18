<script lang="ts">
	import { onMount } from 'svelte';
	import Listings from './Listings.json';
	import type { Listing } from '$lib';
	import Steps from '$lib/components/Steps.svelte';
	import { AdjustmentsHorizontal, ArrowsPointingOut, Home, Icon } from 'svelte-hero-icons';
	import { Bathtub, Tv, Heat_pump, Bed } from 'svelte-google-materialdesign-icons';
	import ImageSteps from '$lib/components/app/ImageSteps.svelte';
	let listings: Listing[] = [];
	let currentStep = 0;
	let steps: number[] = [];
	let stepsMap: number[][] = [];
	let currentSteps: number[] = [];

	onMount(() => {
		if (Listings && Array.isArray(Listings.results)) {
			listings = Listings.results.slice(17, 40) as unknown as Listing[];

			if (listings.length > 0) {
				stepsMap = listings.map((listing) =>
					Array.from({ length: listing.images.length }, (_, i) => i)
				);
				currentSteps = listings.map(() => 0);
			}
		} else {
			console.error('Listings or Listings.results is not an array:', Listings);
		}
	});

	let swiperEl = null;
	const onTap = (e, index) => {
		const elementWidth = e.currentTarget.offsetWidth;
		const tapX = e.changedTouches[0].clientX;
		const isLeftTap = tapX < elementWidth / 2;
		const isRightTap = tapX >= elementWidth / 2;

		if (isLeftTap) changeImage('left', index);
		if (isRightTap) changeImage('right', index);
	};

	const changeImage = (direction, index) => {
		if (direction === 'left' && currentSteps[index] > 0) {
			currentSteps = [
				...currentSteps.slice(0, index),
				currentSteps[index] - 1,
				...currentSteps.slice(index + 1)
			];
		}
		if (direction === 'right' && currentSteps[index] < stepsMap[index].length - 1) {
			currentSteps = [
				...currentSteps.slice(0, index),
				currentSteps[index] + 1,
				...currentSteps.slice(index + 1)
			];
		}
	};
</script>

<swiper-container
	bind:this={swiperEl}
	one-way-movement={true}
	grab-cursor={false}
	effect="cards"
	class="text-white w-full h-full"
	cards-effect-slide-shadows={false}
	cards-effect-rotate={false}
	cards-effect-per-slide-rotate={0.5}
	allow-slide-prev={true}
>
	{#each listings as listing, index}
		{@const steps = stepsMap[index]}
		{@const currentStep = currentSteps[index]}
		<swiper-slide
			lazy="true"
			ontouchend={(e) => {
				onTap(e, index);
			}}
			class="bg-blue-500 relative rounded-xl w-full h-full"
		>
			<div
				class="absolute h-10 bg-gradient-to-b from-emerald-500/30 to-transparent flex items-center z-50 top-0 w-full px-4"
			>
				<ImageSteps {steps} {currentStep} />
			</div>
			<div class="h-full relative">
				<img
					src={listing.images[currentStep]?.image}
					class="rounded-xl h-full object-cover"
					alt=""
					loading="lazy"
				/>
				<section
					class="z-20 backdrop-filter bg-gradient-to-t from-emerald-500/30 via-75% to-cyan-300/30 backdrop-blur-2xl absolute bottom-0 p-4 w-full"
				>
					<h1 class="text-2xl font-bold items-center flex justify-between">
						{listing.title}
						<span
							class="inline-flex self-start items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
						>
							<svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
								<circle cx="3" cy="3" r="3" />
							</svg>
							Renovated
						</span>
					</h1>
					<ul class="flex w-full justify-between items-center">
						<li class="flex gap-0.5 flex-col text-sm items-center">
							<span class="flex items-center gap-0.5">
								<Icon src={ArrowsPointingOut} class="size-4 stroke-stone-50" />
								<!--								<Hiking />-->
								{listing.area} m²
							</span><span class="flex self-start items-center gap-0.5">
								<Bed class="size-4" />
								<!--								<Hiking />-->
								{listing.rooms}
							</span>
						</li>
						<li class="text-xl font-bold flex flex-col">
							{listing.rent} SEK
							<div class="mt-2 flex self-end items-center space-x-3">
								{#if listing.object_ad.object_ad.has_bathtub}
									<div class="flex items-center">
										<Bathtub class="size-4" />
									</div>
								{/if}
								{#if listing.object_ad.object_ad.tv_included}
									<div class="flex items-center">
										<Tv class="size-4" />
									</div>
								{/if}
								{#if listing.object_ad.object_ad.heat_included}
									<div class="flex items-center">
										<Heat_pump class="size-4" />
									</div>
								{/if}
							</div>
						</li>
					</ul>
				</section>
			</div>
			<!--			<h2>Slide {index + 1}</h2>-->
			<!--			<p>{listing.title}</p>-->
		</swiper-slide>
	{/each}
</swiper-container>

<!--<swiper-container effect="cards" class="text-white w-full h-full" css-mode="false">-->
<!--	<swiper-slide class="bg-blue-500 w-full h-full">Slide 1</swiper-slide>-->
<!--	<swiper-slide>Slide 2</swiper-slide>-->
<!--	<swiper-slide>Slide 3</swiper-slide>-->
<!--	...-->
<!--</swiper-container>-->
