// listingHandlers.ts
import { onMount } from 'svelte';
import Listings from './Listings.json';
import type { Listing } from '$lib/utils';

export let listings = $state({ data: [] });

export let currentSteps: number[] = [];
export let totalSteps: number[] = [];

export const initializeListings = () => {
	if (Listings && Array.isArray(Listings.results)) {
		listings = Listings.results.slice(17, 40) as unknown as Listing[];

		if (listings.length > 0) {
			totalSteps = listings.map((listing) => listing.images.length);
			currentSteps = listings.map(() => 0);
		}
	} else {
		console.error('Listings or Listings.results is not an array:', Listings);
	}
};

export const onTouchStart = (e: TouchEvent) => {
	touchEndY = null;
	touchStartY = e.targetTouches[0].clientY;
};

export const onTouchMove = (e: TouchEvent) => {
	touchEndY = e.targetTouches[0].clientY;
};

export const onTouchEnd = (index: number) => {
	if (!touchStartY || !touchEndY) return;
	const verticalDistance = touchStartY - touchEndY;
	const isUpSwipe = verticalDistance > minSwipeDistance;

	if (isUpSwipe) {
		console.log('swiped up');
	}

	touchStartY = null;
	touchEndY = null;
};

export const onTap = (e: TouchEvent, index: number) => {
	const elementWidth = (e.currentTarget as HTMLElement).offsetWidth;
	const tapX = e.changedTouches[0].clientX;
	const isLeftTap = tapX < elementWidth / 2;
	const isRightTap = tapX >= elementWidth / 2;
	console.log(tapX);
	if (isLeftTap) changeImage('left', index);
	if (isRightTap) changeImage('right', index);
};

export const changeImage = (direction: 'left' | 'right', index: number) => {
	if (direction === 'left' && currentSteps[index] > 0) {
		currentSteps[index]--;
	}
	if (direction === 'right' && currentSteps[index] < totalSteps[index] - 1) {
		currentSteps[index]++;
	}
	currentSteps = [...currentSteps];
};

let touchStartY: number | null = null;
let touchEndY: number | null = null;
const minSwipeDistance = 50;
