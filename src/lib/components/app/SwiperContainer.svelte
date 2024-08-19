<script lang="ts">
	import { onMount } from 'svelte';
	import Listings from './Listings.json';
	import type { Listing } from '$lib/utils';
	import { AdjustmentsHorizontal, ArrowsPointingOut, Home, Icon } from 'svelte-hero-icons';
	import { Bathtub, Tv, Heat_pump, Bed } from 'svelte-google-materialdesign-icons';
	import ImageSteps from '$lib/components/app/ImageSteps.svelte';

	let listings: Listing[] = [];
	onMount(() => {
		if (Listings && Array.isArray(Listings.results)) {
			listings = Listings.results.slice(17, 40) as unknown as Listing[];

			if (listings.length > 0) {
				totalSteps = listings.map((listing) => listing.images.length);
				currentSteps = listings.map(() => 0);
			}
		} else {
			console.error('Listings or Listings.results is not an array:', Listings);
		}
	});

	let currentSteps: number[] = [];
	let totalSteps: number[] = [];

	let touchStartY: number | null = null;
	let touchEndY: number | null = null;
	const minSwipeDistance = 50;

	const onTouchStart = (e: TouchEvent) => {
		touchEndY = null;
		touchStartY = e.targetTouches[0].clientY;
	};

	const onTouchMove = (e: TouchEvent) => {
		touchEndY = e.targetTouches[0].clientY;
	};

	const onTouchEnd = (index: number) => {
		if (!touchStartY || !touchEndY) return;
		const verticalDistance = touchStartY - touchEndY;
		const isUpSwipe = verticalDistance > minSwipeDistance;

		if (isUpSwipe) {
			console.log('swiped up');
		}

		touchStartY = null;
		touchEndY = null;
	};

	const onTap = (e: TouchEvent, index: number) => {
		const elementWidth = (e.currentTarget as HTMLElement).offsetWidth;
		const tapX = e.changedTouches[0].clientX;
		const isLeftTap = tapX < elementWidth / 2;
		const isRightTap = tapX >= elementWidth / 2;

		if (isLeftTap) changeImage('left', index);
		if (isRightTap) changeImage('right', index);
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
	loop={true}
	class="text-white w-full h-full"
	cards-effect-slide-shadows={false}
	cards-effect-rotate={false}
	cards-effect-per-slide-rotate={0.5}
	allow-slide-prev={true}
>
	{#each listings as listing, index}
		<swiper-slide
			lazy="true"
			ontouchstart={(e) => onTouchStart(e)}
			ontouchmove={(e) => onTouchMove(e)}
			ontouchend={(e) => {
				onTouchEnd(index);
				onTap(e, index);
			}}
			class="bg-gradient-to-t from-emerald-500 to-cyan-300 relative rounded-xl w-full h-full"
		>
			<div
				class="absolute h-10 bg-gradient-to-b from-emerald-500/30 to-transparent flex items-center z-50 top-0 w-full px-4"
			>
				<ImageSteps totalSteps={totalSteps[index]} currentStep={currentSteps[index]} />
			</div>
			<div class="h-full relative">
				{#key listing.images[currentSteps[index]]}
					<img
						src={listing.images[currentSteps[index]]?.image}
						class="rounded-xl h-full object-cover"
						alt=""
						loading="lazy"
					/>
				{/key}
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
							Renovated
						</span>
					</h1>
					<ul class="flex w-full z-20 justify-between items-center">
						<li class="flex gap-0.5 z-20 flex-col text-sm items-center">
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
						<li class="text-xl z-20 font-bold flex flex-col">
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
