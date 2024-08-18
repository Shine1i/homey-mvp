<script lang="ts">
	export let steps: Array<number> = [];
	export let currentStep: number = 0;
	export let className: string = '';

	const goToPreviousStep = () => {
		if (currentStep > 0) {
			currentStep = currentStep - 1;
		}
	};

	const goToNextStep = () => {
		if (currentStep < steps.length - 1) {
			currentStep = currentStep + 1;
		}
	};
</script>

<div class="flex w-full space-x-1 justify-center gap-0.5 items-center">
	{#if currentStep > 0}
		<button on:click={goToPreviousStep}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="size-6 stroke-stone-500 font-bold"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
				/>
			</svg>
		</button>
	{/if}
	{#each steps as step, index}
		<div
			class={`h-1 flex-grow rounded-full transition-all duration-300 ${
				index < currentStep ? 'bg-emerald-300' : `bg-stone-400 ${className} opacity-90`
			}`}
		></div>
	{/each}
</div>
