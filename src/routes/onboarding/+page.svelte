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

<div class="flex h-[100vh] w-full flex-col overflow-hidden">
	<div class="w-full absolute top-0 z-50 max-w-md mx-auto p-4">
		<Steps steps={steps.total} currentStep={steps.currentStep} />
	</div>
	<div class="absolute h-full w-full"></div>
	<div
		class:!h-[25%]={steps.currentStep === 0}
		class:!h-[25%]={steps.currentStep === 4}
		class="h-2/6 scale-150 rounded-b-[100%] bg-gradient-to-br from-emerald-300/35 via-emerald-200/35 to-cyan-500/35 blur"
	></div>
	<main class="absolute overflow-hidden h-full w-full flex flex-col justify-between">
		<!-- top part -->
		<section class="flex justify-center items-center h-[40%]">
			{#if steps.currentStep === 0}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/medal-front-clay.png"
					alt=""
					class="m-auto h-auto w-28"
				/>
			{/if}
			{#if steps.currentStep === 1}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/money-front-clay.png"
					alt=""
					class="m-auto h-auto w-28"
				/>
			{/if}
			{#if steps.currentStep === 2}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/map-pin-front-clay.png"
					alt=""
					class="m-auto h-auto w-28"
				/>
			{/if}
			{#if steps.currentStep === 3}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/boy-front-clay.png"
					alt=""
					class="m-auto h-auto w-28"
				/>
			{/if}
			{#if steps.currentStep === 4}
				<img
					in:fly={{ x: 300, duration: 350 }}
					src="/paint-kit-front-clay.png"
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
					<h1 class="font-sans text-4xl font-semibold tracking-tight text-stone-800">Welcome!</h1>
					<h4 class="font-sans text-sm font-medium text-stone-500">
						Let's start exploring!<br />
						Chose what do you search for
					</h4>
					<div
						class="mt-6 w-full rounded-lg bg-stone-50/30 shadow-lg shadow-stone-300 ring-1 ring-stone-400 ring-opacity-50"
					>
						<ul role="list" class="divide-y divide-stone-300 mx-auto pr-2">
							<li class="flex items-center px-2 justify-between gap-6 py-4 text-black">
								<!-- Your content -->
								<div class="flex items-center gap-2">
									<img src="/key-front-clay.png" class="h-auto w-16" alt="" />
									<div class="text-sm text-stone-800">
										<h3 class="font-bold">Apartments</h3>
										<div class="text-xs text-stone-500">Find your perfect rental property!</div>
									</div>
								</div>
								<button
									onclick={() => {
										steps.currentStep++;
									}}
									type="button"
									class="rounded-full bg-gradient-to-r from-emerald-200 to-emerald-400 px-2.5 py-1 text-xs font-semibold text-stone-800 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>Choose</button
								>
							</li>
							<li class="flex items-center gap-6 px-2 justify-between py-4 text-black">
								<!-- Your content -->
								<div class="flex items-center gap-2">
									<img src="/medal-front-clay.png" class="h-auto w-16" alt="" />
									<div class="text-sm text-white">
										<h3 class="font-bol text-stone-800">House</h3>
										<div class="text-xs text-stone-500">Find your perfect rental property!</div>
									</div>
								</div>
								<button
									onclick={() => {
										steps.currentStep++;
									}}
									type="button"
									class="rounded-full bg-gradient-to-r from-emerald-200 to-emerald-400 px-2.5 py-1 text-xs font-semibold text-stone-800 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>Choose</button
								>
							</li>
							<li class="flex items-center gap-6 px-2 justify-between py-4 text-black">
								<!-- Your content -->
								<div class="flex items-center gap-2">
									<img src="/boy-front-clay.png" class="h-auto w-16" alt="" />
									<div class="text-sm">
										<h3 class="font-bold text-stone-800">Roommate</h3>
										<div class="text-xs text-stone-500">Find your perfect soulmate!</div>
									</div>
								</div>
								<button
									onclick={() => {
										goto('/home');
									}}
									type="button"
									class="rounded-full bg-gradient-to-r from-emerald-200/60 to-emerald-400/40 px-2.5 text-nowrap py-1 text-xs font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
