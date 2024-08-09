<script lang="ts">
	const { steps = [], currentStep = 0 }: { steps: Array<number>; currentStep: number } = $props();
	import { steps as Steps } from '$lib/states.svelte';
</script>

<div class="flex w-full space-x-1 justify-center gap-0.5 items-center">
	<button onclick={() => (Steps.currentStep = Steps.currentStep - 1)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="size-6 stroke-white font-bold"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
			/>
		</svg>
	</button>
	{#each steps as step, index}
		<div
			class={`h-1 flex-grow rounded-full transition-all duration-300 ${
				index + 1 <= currentStep ? 'bg-amber-500' : 'bg-gray-400 opacity-90'
			}`}
		></div>
	{/each}
</div>
