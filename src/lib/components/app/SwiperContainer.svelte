<script lang="ts">
	import { onMount } from 'svelte';
	import type { Listing } from '$lib/utils';
	import { ArrowsPointingOut, Icon } from 'svelte-hero-icons';
	import { Bathtub, Tv, Heat_pump, Bed } from 'svelte-google-materialdesign-icons';
	import ImageSteps from '$lib/components/app/ImageSteps.svelte';
	import Nescesities from '$lib/components/Nescesities.svelte';

	let listings: Listing[] = [];
	let currentSteps: number[] = [];
	let totalSteps: number[] = [];
	let swiperEl: HTMLElement;

	onMount(async () => {
		const url = `http://localhost:3000/listings?lat=59.3793&lon=13.5036`;
		const response = await fetch(url);
		listings = await response.json();

		if (listings.length > 0) {
			totalSteps = listings.map((listing) => listing.images.length);
			currentSteps = listings.map(() => 0);
		}

		// Initialize Swiper events
		swiperEl = document.querySelector('swiper-container');
		swiperEl.addEventListener('swiperslidechange', handleSlideChange);
		swiperEl.addEventListener('swiperslidenexttransitionstart', handleSlideNext);
		swiperEl.addEventListener('swiperslideprevtransitionstart', handleSlidePrev);
	});

	const handleSlideChange = (event) => {
		const [swiper] = event.detail;
		// console.log('Slide changed', swiper);
		// Add your general slide change logic here
	};

	const handleSlidePrev = (event) => {
		const [swiper] = event.detail;
		console.log('Swiped to previous slide', swiper.activeIndex);
		// Add your logic for swiping left here
	};
	const handleSlideNext = (event) => {
		const [swiper] = event.detail;
		console.log('Swiped to next slide', swiper.activeIndex);
		// Add your logic for swiping right here
	};
	const onTap = (e: TouchEvent, index: number) => {
		const elementWidth = (e.currentTarget as HTMLElement).offsetWidth;
		const tapX = e.changedTouches[0].clientX;
		const isLeftTap = tapX < elementWidth / 2;
		const isRightTap = tapX >= elementWidth / 2;

		if (isLeftTap) {
			changeImage('left', index);
		}
		if (isRightTap) {
			changeImage('right', index);
		}
	};

	const changeImage = (direction: 'left' | 'right', index: number) => {
		if (direction === 'left' && currentSteps[index] > 0) {
			currentSteps[index]--;
		}
		if (direction === 'right' && currentSteps[index] < totalSteps[index] - 1) {
			currentSteps[index]++;
		}
		currentSteps = [...currentSteps];
	};
</script>

<swiper-container
	grab-cursor={false}
	effect="cards"
	slides-per-view="1"
	loop={true}
	class="text-white w-full overflow-scroll h-full"
	cards-effect-slide-shadows={false}
	cards-effect-rotate={false}
	cards-effect-per-slide-rotate={0.5}
	allow-slide-prev={true}
>
	{#each listings as listing, index}
		<swiper-slide
			lazy="true"
			ontouchend={(e) => {
				console.log('ontouchend event for swiper-slide', index);
				onTap(e, index);
			}}
			class="bg-stone-200 relative rounded-xl max-h-[550px] w-full h-full overflow-scroll"
		>
			<div
				class="absolute h-10 bg-gradient-to-b from-emerald-500/30 to-transparent flex items-center z-50 top-0 w-full px-4"
			>
				<ImageSteps totalSteps={totalSteps[index]} currentStep={currentSteps[index]} />
			</div>
			<div class="h-full relative overflow-scroll pointer-events-none">
				{#key listing.images[currentSteps[index]]}
					<img
						src={`https://wsrv.nl/?url=${listing.images[currentSteps[index]]?.image}&w=700&h=750&output=webp`}
						class="rounded-xl h-full max-h-[550px] object-cover pointer-events-none"
						alt=""
						loading="lazy"
					/>
				{/key}
			</div>
			<div class="max-w-2xl bg-stone-50 border m-auto relative">
				<div class="p-4 rounded-lg shadow-md flex justify-between items-start">
					<div class="w-full">
						<div class="flex justify-between items-center">
							<div>
								<div class="text-2xl font-semibold text-stone-800">8038 kr</div>
								<div class="text-sm text-stone-500">2.0 rum • 67 m²</div>
							</div>
							<div class="ml-4">
								<img
									src="https://geo.homeq.se/api/v3/maps?latitude={listing.location
										.coordinates[1]}&longitude={listing.location
										.coordinates[0]}&width=900&height=400&zoom=13"
									class="w-12 h-12 rounded-xl bg-stone-500 flex items-center justify-center text-sm"
									alt="location"
								/>
							</div>
						</div>

						<hr class="my-2" />
						<ul class="w-full">
							<li class="flex justify-between items-center">
								<div class="text-sm text-stone-500">Kontraktstyp</div>
								<div class="text-sm text-stone-800">Tillsvidare</div>
							</li>
							<li class="flex justify-between items-center">
								<div class="text-sm text-stone-500 mt-1">Sortering</div>
								<div class="text-sm text-stone-800">Strikt efter köpoäng</div>
							</li>
							<li class="flex justify-between items-center">
								<div class="text-sm text-stone-500 mt-1">Inflyttningsdatum</div>
								<div class="text-sm text-stone-800">2024-12-01</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="text-stone-800 mt-4 text-2xl p-4">
					{listing.title}

					<p class="text-sm line-clamp-3 text-stone-500">{listing.object_ad.description}</p>
					<!--					<div class="flex flex-col gap-3">-->
					<!--						<div>Location</div>-->
					<!--						<img-->
					<!--							src="https://geo.homeq.se/api/v3/maps?latitude={listing.location-->
					<!--								.coordinates[1]}&longitude={listing.location-->
					<!--								.coordinates[0]}&width=900&height=400&zoom=13"-->
					<!--							class="w-full h-40 rounded-xl bg-stone-500 flex items-center justify-center text-sm"-->
					<!--							alt="location"-->
					<!--						/>-->
					<!--					</div>-->
					<Nescesities object_ad={listing.object_ad} />
				</div>
			</div>
			<section class="z-20 absolute bottom-0 p-4 w-full">
				<div
					class="absolute bg-gradient-to-t inset-0 from-black/90 to-transparent z-0 -bottom-2"
				></div>
				<h1 class="text-2xl font-bold relative z-20 items-center flex justify-between">
					{listing.title}
					<span
						class="inline-flex self-start items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-stone-200"
					>
						<svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
							<circle cx="3" cy="3" r="3" />
						</svg>
						56% Match
					</span>
				</h1>
				<ul class="flex w-full z-20 justify-between items-center">
					<li class="flex gap-0.5 z-20 flex-col text-sm items-center">
						<span class="flex items-center gap-0.5">
							<Icon src={ArrowsPointingOut} class="size-4 stroke-stone-50" />
							{listing.area} m²
						</span><span class="flex self-start items-center gap-0.5">
							<Bed class="size-4" />
							{listing.rooms}
						</span>
					</li>
					<li class="text-xl z-20 font-bold flex flex-col">
						{listing.rent} SEK
						<div class="mt-2 flex self-end items-center space-x-3">
							{#if listing.object_ad.has_bathtub}
								<div class="flex items-center">
									<Bathtub class="size-4" />
								</div>
							{/if}
							{#if listing.object_ad.tv_included}
								<div class="flex items-center">
									<Tv class="size-4" />
								</div>
							{/if}
							{#if listing.object_ad.heat_included}
								<div class="flex items-center">
									<Heat_pump class="size-4" />
								</div>
							{/if}
						</div>
					</li>
				</ul>
			</section>
		</swiper-slide>
	{/each}
</swiper-container>
