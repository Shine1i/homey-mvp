<script lang="ts">
	import { steps } from '$lib/states.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

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
	let particlesContainer: SVGSVGElement;

	onMount(() => {
		const particlesCount = 15;
		for (let i = 0; i < particlesCount; i++) {
			const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			particle.setAttribute('r', (Math.random() * 1.5 + 0.5).toString());
			particle.setAttribute('cx', (Math.random() * 100).toString() + '%');
			particle.setAttribute('cy', (Math.random() * 100).toString() + '%');
			particle.setAttribute('fill', 'rgba(255, 255, 255, 0.7)');
			particle.style.animation = `
				float ${Math.random() * 4 + 3}s linear infinite,
				fade ${Math.random() * 3 + 2}s ease-in-out infinite alternate,
				fall ${Math.random() * 5 + 3}s linear infinite
			`;
			particlesContainer.appendChild(particle);
		}
	});
</script>

<div in:fly={{ x: 300, duration: 350 }} class="p-6 rounded-lg overflow-auto pb-12">
	<h2 class="text-2xl font-bold text-[#E0E0E0] mb-4">Set your interests</h2>
	{#each Object.entries(interests) as [category, interestList]}
		<h3 class="text-xl text-gray-300 mb-4">{category}</h3>
		<div class="flex flex-wrap gap-2 mb-4">
			{#each interestList as interest, index}
				<button
					onclick={() => toggleInterest(category, index)}
					class="flex items-center ring-1 ring-zinc-700 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 {interest.enabled
						? 'bg-amber-500 text-white'
						: 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'}"
				>
					<span class="mr-1">{interest.icon}</span>
					{interest.content}
				</button>
			{/each}
		</div>
	{/each}
	<button
		type="button"
		class="w-full fixed bottom-0 left-0 rounded-full bg-gradient-to-br from-purple-900 via-purple-700 to-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 overflow-hidden"
	>
		<span class="relative z-10">Swipe your way home</span>
		<svg
			bind:this={particlesContainer}
			class="absolute inset-0 w-full h-full"
			xmlns="http://www.w3.org/2000/svg"
		>
			<!-- Particles will be dynamically added here -->
		</svg>
		<div class="light-effect"></div>
	</button>
</div>

<style>
	@keyframes float {
		0% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(10px, -10px);
		}
		50% {
			transform: translate(-5px, 15px);
		}
		75% {
			transform: translate(-15px, -5px);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@keyframes fade {
		0%,
		100% {
			opacity: 0.2;
		}
		50% {
			opacity: 0.9;
		}
	}

	@keyframes fall {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(100px);
			opacity: 0;
		}
	}

	@keyframes moveLight {
		0% {
			transform: translateX(100%) skew(-45deg);
		}
		100% {
			transform: translateX(-100%) skew(-45deg);
		}
	}

	.light-effect {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
		transform: translateX(100%) skew(-45deg);
		animation: moveLight 3s infinite;
	}

	button:hover .light-effect {
		animation-duration: 1.5s;
	}
</style>
