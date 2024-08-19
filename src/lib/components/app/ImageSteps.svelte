<script lang="ts">
	export let totalSteps: number;
	export let currentStep: number;
	export let className: string = '';

	$: steps = Array.from({ length: totalSteps }, (_, i) => i);
</script>

<div class="flex w-full space-x-1 justify-center gap-0.5 items-center">
	{#each steps as step}
		<div
			class={`h-1 flex-grow rounded-full transition-all duration-300 ${
				step <= currentStep ? 'bg-emerald-300' : `bg-stone-400 ${className} opacity-90`
			}`}
		></div>
	{/each}
</div>
