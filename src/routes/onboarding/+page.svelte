<script lang="ts">
	import Steps from '$lib/components/Steps.svelte';
	import PriceRangeSlider from '$lib/components/PriceRangeSlider.svelte';
	import RangeSlider from 'svelte-range-slider-pips';
	import PriceTab from '$lib/components/onboarding/PriceTab.svelte';
	import { steps } from '$lib/states.svelte';
	import { fly } from 'svelte/transition';
	import LocationTab from '$lib/components/onboarding/LocationTab.svelte';
	import ProfileTab from '$lib/components/onboarding/ProfileTab.svelte';
	import InterestsTab from '$lib/components/onboarding/InterestsTab.svelte';
	import { goto } from '$app/navigation';
</script>

<div
	class="flex h-[100vh] w-full flex-col overflow-hidden bg-[#000000] bg-gradient-to-br from-purple-900 via-purple-700 to-amber-500"
>
	<div class="w-full absolute top-0 z-50 max-w-md mx-auto p-4">
		<Steps steps={steps.total} currentStep={steps.currentStep} />
	</div>
	<div class="absolute h-full w-full bg-[#1A1A2E]/80"></div>
	<div
		class:!h-[25%]={steps.currentStep === 0}
		class:!h-[25%]={steps.currentStep === 4}
		class="h-2/6 scale-150 rounded-b-[100%] bg-gradient-to-br from-purple-900 via-purple-700 to-amber-500 blur"
	></div>
	<main class="absolute overflow-hidden h-full w-full flex flex-col justify-between">
		<!-- top part -->
		<section class="flex justify-center items-center h-[40%]">
			{#if steps.currentStep === 0}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/medal-front-gradient.png"
					alt=""
					class="m-auto h-auto w-28"
				/>
			{/if}
			{#if steps.currentStep === 1}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/money-front-gradient.png"
					alt=""
					class="m-auto h-auto w-28"
				/>
			{/if}
			{#if steps.currentStep === 2}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/map-pin-front-gradient.png"
					alt=""
					class="m-auto h-auto w-28"
				/>
			{/if}
			{#if steps.currentStep === 3}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/boy-front-gradient.png"
					alt=""
					class="m-auto h-auto w-28"
				/>
			{/if}
			{#if steps.currentStep === 4}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/color-palette-front-gradient.png"
					alt=""
					class="m-auto h-auto w-28 pt-8"
				/>
			{/if}
		</section>
		{#if steps.currentStep === 1}
			<PriceTab />
		{/if}
		{#if steps.currentStep === 2}
			<LocationTab />
		{/if}
		{#if steps.currentStep === 3}
			<ProfileTab />
		{/if}
		{#if steps.currentStep === 4}
			<InterestsTab />
		{/if}
		{#if steps.currentStep === 0}
			<section in:fly={{ x: 300, duration: 350 }} class="flex pb-4 px-4 mx-auto">
				<div class="row-start-6 flex flex-col items-baseline gap-2 pt-10 text-white">
					<h1 class="font-sans text-4xl font-semibold tracking-tight text-[#E0E0E0]">Welcome!</h1>
					<h4 class="font-sans text-sm font-medium text-[#B0B0B0]">
						Let's start exploring!<br />
						Chose what do you search for
					</h4>
					<div
						class="mt-6 w-full rounded-lg bg-zinc-700/40 shadow-lg shadow-[#1A1A2E] ring-1 ring-zinc-700"
					>
						<ul role="list" class="divide-y divide-zinc-700 mx-auto pr-2">
							<li class="flex items-center px-2 justify-between gap-6 py-4 text-black">
								<!-- Your content -->
								<div class="flex items-center gap-2">
									<img src="/key-front-gradient.png" class="h-auto w-16" alt="" />
									<div class="text-sm text-white">
										<h3 class="font-bold">Apartments</h3>
										<div class="text-xs">Find your perfect rental property!</div>
									</div>
								</div>
								<button
									onclick={() => {
										steps.currentStep++;
									}}
									type="button"
									class="rounded-full bg-amber-400 px-2.5 py-1 text-xs font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>Choose</button
								>
							</li>
							<li class="flex items-center gap-6 px-2 justify-between py-4 text-black">
								<!-- Your content -->
								<div class="flex items-center gap-2">
									<img src="/medal-front-gradient.png" class="h-auto w-16" alt="" />
									<div class="text-sm text-white">
										<h3 class="font-bold">House</h3>
										<div class="text-xs">Find your perfect rental property!</div>
									</div>
								</div>
								<button
									onclick={() => {
										steps.currentStep++;
									}}
									type="button"
									class="rounded-full bg-amber-400 px-2.5 py-1 text-xs font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>Choose</button
								>
							</li>
							<li class="flex items-center gap-6 px-2 justify-between py-4 text-black">
								<!-- Your content -->
								<div class="flex items-center gap-2">
									<img src="/boy-front-gradient.png" class="h-auto w-16" alt="" />
									<div class="text-sm text-white">
										<h3 class="font-bold">Roommate</h3>
										<div class="text-xs">Find your perfect soulmate!</div>
									</div>
								</div>
								<button
									onclick={() => {
										goto('/home');
									}}
									type="button"
									class="rounded-full bg-amber-400/40 px-2.5 text-nowrap py-1 text-xs font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>coming soon</button
								>
							</li>

							<!-- More items... -->
						</ul>
					</div>
				</div>
			</section>
		{/if}
	</main>
</div>

<style lang="postcss">
</style>
