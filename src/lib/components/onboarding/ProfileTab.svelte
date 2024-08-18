<script>
	import { steps } from '$lib/states.svelte';
	import { fly } from 'svelte/transition';
	const options = [
		{ text: 'Have a partner', enabled: false },
		{ text: 'Have a pet', enabled: true },
		{ text: 'I smoke', enabled: false }
	];
</script>

<ul in:fly={{ x: 300, duration: 350 }} role="list" class=" px-4 flex flex-col ga-4 pb-4">
	<li class="flex flex-col py-4 text-black">
		<h1 class="text-2xl font-medium text-stone-800">Set your profile</h1>
	</li>

	<li class="flex flex-col gap-6 py-4 text-black">
		{#each options as option}
			<div class="flex items-center justify-between">
				<span class="flex flex-grow flex-col">
					<span class="text-sm leading-6 text-stone-500 font-medium" id="availability-label"
						>{option.text}</span
					>
				</span>

				<button
					type="button"
					class="relative {option.enabled
						? '!bg-emerald-400'
						: 'bg-gray-200'} inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-stone-300 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
					role="switch"
					aria-checked="false"
					aria-labelledby="availability-label"
					aria-describedby="availability-description"
				>
					<span
						aria-hidden="true"
						class="pointer-events-none inline-block h-5 w-5 {option.enabled
							? 'translate-x-5'
							: 'translate-x-0'} transform rounded-full bg-white shadow ring-1 ring-stone-400 transition duration-200 ease-in-out"
					></span>
				</button>
			</div>
		{/each}
		<div class="flex items-center justify-between">
			<span class="flex flex-grow flex-col">
				<span class="text-sm leading-6 text-stone-500 font-medium" id="availability-label"
					>My chronotype
				</span>
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="size-5 stroke-stone-400 fill-gray-400"
			>
				<path
					fill-rule="evenodd"
					d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<div class="flex items-center justify-between">
			<span class="flex flex-grow flex-col">
				<span class="text-sm leading-6 text-stone-500 font-medium" id="availability-label"
					>My social type
				</span>
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="size-5 stroke-stone-400 fill-stone-400"
			>
				<path
					fill-rule="evenodd"
					d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</li>
	<li class="flex flex-col py-4 text-black">
		<button
			onclick={() => {
				steps.currentStep++;
			}}
			type="button"
			class="w-full rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
		>
			Next
		</button>
	</li>
</ul>
