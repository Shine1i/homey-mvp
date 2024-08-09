<script>
	import { steps } from '$lib/states.svelte';
	import { fly } from 'svelte/transition';
</script>

<ul in:fly={{ x: 300, duration: 350 }} role="list" class=" px-4 flex flex-col pb-4">
	<li class="flex py-0 text-black">
		<h1 class="text-2xl font-medium text-[#E0E0E0]">Set your location</h1>
	</li>
	<li class=" py-4 text-black">
		<div>
			<label for="email" class="block text-sm font-medium leading-6 text-[#B0B0B0]"
				>Enter a location</label
			>
			<div class="relative mt-2 rounded-md shadow-sm">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="size-5 text-gray-400"
					>
						<path
							fill-rule="evenodd"
							d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					type="text"
					name="phone-number"
					id="phone-number"
					class="block rounded-lg bg-zinc-400/20 py-2 pl-10 w-full outline-none ring-1 ring-inset ring-gray-700 border-0 py-1.5 focus:outline-none focus:ring-0 text-gray-200 placeholder:text-gray-400 focus:bg-zinc-400/40 sm:text-sm sm:leading-6"
					placeholder="e. g. Horsensgatan 182"
				/>
			</div>
		</div>
	</li>
	<li class="flex flex-col py-4 text-black">
		<button
			onclick={() => {
				steps.currentStep++;
			}}
			type="button"
			class="w-full rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
		>
			Next
		</button>
	</li>
</ul>
