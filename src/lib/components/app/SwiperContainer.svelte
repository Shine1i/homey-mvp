<script lang="ts">
	import { onMount } from 'svelte';
	import Listings from './Listings.json';
	import type { Listing } from '$lib';
	import Steps from '$lib/components/Steps.svelte';
	let listings: Listing[] = [];

	// Initialize listings on component mount
	onMount(() => {
		if (Listings && Array.isArray(Listings.results)) {
			listings = Listings.results.slice(17, 40) as unknown as Listing[]; // Take the first 25 listings
		} else {
			console.error('Listings or Listings.results is not an array:', Listings);
		}
	});
</script>

<swiper-container
	one-way-movement={true}
	grab-cursor={false}
	effect="cards"
	class="text-white w-full h-full"
	cards-effect-slide-shadows={false}
	cards-effect-rotate={false}
	cards-effect-per-slide-rotate={0.5}
>
	{#each listings as listing, index}
		<swiper-slide class="bg-blue-500 relative rounded-xl w-full h-full">
			<div
				class="absolute h-10 bg-gradient-to-b from-zinc-900/85 to-transparent flex items-center z-50 top-0 w-full px-4"
			>
				<Steps steps={[1, 3, 4, 5]} currentStep={1} class="!bg-zinc-700" />
			</div>
			<img src={listing.images[0].image} class="rounded-xl h-full object-cover" alt="" />
			<h2>Slide {index + 1}</h2>
			<p>{listing.title}</p>
			12
		</swiper-slide>
	{/each}
</swiper-container>

<!--<swiper-container effect="cards" class="text-white w-full h-full" css-mode="false">-->
<!--	<swiper-slide class="bg-blue-500 w-full h-full">Slide 1</swiper-slide>-->
<!--	<swiper-slide>Slide 2</swiper-slide>-->
<!--	<swiper-slide>Slide 3</swiper-slide>-->
<!--	...-->
<!--</swiper-container>-->
