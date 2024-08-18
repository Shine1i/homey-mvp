<script lang="ts">
	import { steps } from '$lib/states.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	type Interest = {
		content: string;
		icon: string;
		enabled: boolean;
	};

	type InterestCategories = {
		[key: string]: Interest[];
	};

	let interests: InterestCategories = {
		Creativity: [
			{ content: 'Art', icon: '🎨', enabled: false },
			{ content: 'Makeup', icon: '💄', enabled: false },
			{ content: 'Filmmaking', icon: '🎬', enabled: false },
			{ content: 'Dancing', icon: '💃', enabled: true },
			{ content: 'Theatre', icon: '🎭', enabled: false },
			{ content: 'Writing', icon: '✍️', enabled: false },
			{ content: 'Guitar', icon: '🎸', enabled: false },
			{ content: 'Piano', icon: '🎹', enabled: true },
			{ content: 'Pottery', icon: '🏺', enabled: false }
		],
		Sport: [
			{ content: 'Football', icon: '⚽', enabled: false },
			{ content: 'Basketball', icon: '🏀', enabled: false },
			{ content: 'Tennis', icon: '🎾', enabled: false },
			{ content: 'Running', icon: '🏃', enabled: true },
			{ content: 'Cycling', icon: '🚴', enabled: false }
		],
		Mentality: [
			{ content: 'Meditation', icon: '🧘', enabled: false },
			{ content: 'Reading', icon: '📖', enabled: true },
			{ content: 'Chess', icon: '♟️', enabled: true },
			{ content: 'Yoga', icon: '🧘‍♂️', enabled: false },
			{ content: 'Philosophy', icon: '📚', enabled: false }
		]
	};

	let selectedInterests: Array<{ content: string; icon: string }> = [];

	function toggleInterest(category: string, index: number) {
		interests[category][index].enabled = !interests[category][index].enabled;
		interests = { ...interests };
		console.log(selectedInterests);
		if (interests[category][index].enabled) {
			selectedInterests = [
				...selectedInterests,
				{ content: interests[category][index].content, icon: interests[category][index].icon }
			];
		} else {
			selectedInterests = selectedInterests.filter(
				(i) => i.content !== interests[category][index].content
			);
		}
	}
</script>

<div in:fly={{ x: 300, duration: 350 }} class="p-6 rounded-lg overflow-auto pb-12">
	<h2 class="text-2xl font-bold text-stone-800 mb-4">Set your interests</h2>
	{#each Object.entries(interests) as [category, interestList]}
		<h3 class="text-xl text-stone-500 mb-4">{category}</h3>
		<div class="flex flex-wrap gap-2 mb-4">
			{#each interestList as interest, index}
				<button
					onclick={() => toggleInterest(category, index)}
					class="flex items-center ring-1 ring-stone-300 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 {interest.enabled
						? 'bg-emerald-500 text-white !ring-0'
						: 'bg-stone-400/40 text-stone-700 hover:bg-gray-600'}"
				>
					<span class="mr-1">{interest.icon}</span>
					{interest.content}
				</button>
			{/each}
		</div>
	{/each}
	<button
		onclick={() => {
			goto('/home');
		}}
		type="button"
		class="w-full fixed bottom-0 left-0 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 overflow-hidden"
	>
		<span class="relative z-10">Swipe your way home</span>
		<div class="light-effect"></div>
	</button>
</div>
