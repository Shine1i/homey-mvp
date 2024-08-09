<script lang="ts">
	import { Application } from '@splinetool/runtime';
	import { fly, fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { isDisplayed } from '$lib/states.svelte';

	let showText = $state(false);
	let showBlob = $state(false);

	$effect(() => {
		const canvas = document.getElementById('canvas3d');
		const app = new Application(canvas as HTMLCanvasElement);

		app.load('https://prod.spline.design/DOrVpQUMc6dpaqD9/scene.splinecode').then(() => {
			app.setZoom(0.5);
			showText = true;
			showBlob = true;
		});
	});
</script>

<div
	class="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-amber-500 opacity-80"
></div>

<div class:blur-xl={isDisplayed.visible} class=" z-10 flex flex-col justify-between h-dvh">
	<div class="flex-grow flex flex-col items-center justify-center relative">
		<div class="relative min-w-[20rem] min-h-[20rem]">
			<canvas id="canvas3d" class="absolute left-4 z-10 w-full h-full pointer-events-none"></canvas>
			{#if showBlob}
				<div
					in:fade={{ duration: 1000 }}
					class="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-purple-300 rounded-full filter blur-xl opacity-70"
				></div>
			{/if}
		</div>
		{#if showText}
			<div class="relative w-72 h-40 mx-auto -mt-4">
				<div
					in:fly={{ x: -300, duration: 1000 }}
					class="absolute w-full h-full flex items-center justify-center"
				>
					<h1 class="curved-text text-5xl font-pacifico font-medium tracking-wide text-purple-200">
						<span>h</span><span>o</span><span>m</span><span class="text-amber-400">e</span><span
							>y</span
						>
					</h1>
				</div>
			</div>
			<div
				in:fly={{ x: -300, duration: 1000 }}
				class="text-white font-sans -skew-x-12 tracking-wide text-lg text-opacity-80"
			>
				Match with your dream space
			</div>
		{/if}
	</div>

	<div class="w-full p-4 space-y-2">
		<button
			onclick={() => {
				isDisplayed.visible = true;
				isDisplayed.isRegister = true;
			}}
			type="button"
			class="w-full rounded-full bg-purple-200 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
		>
			Sign up
		</button>
		<button
			onclick={() => {
				isDisplayed.visible = true;
				isDisplayed.isRegister = false;
			}}
			type="button"
			class="w-full rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
		>
			Log in
		</button>
	</div>
</div>

<style>
	#canvas3d {
		max-width: 100vw;
		max-height: 70vh;
		object-fit: contain;
	}

	.curved-text {
		transform: translateY(-20px);
	}

	.curved-text span {
		position: relative;
		display: inline-block;
		transform-origin: 50% 100%;
	}

	.curved-text span:nth-child(1) {
		transform: rotate(-20deg);
	}

	.curved-text span:nth-child(2) {
		transform: rotate(-10deg);
	}

	.curved-text span:nth-child(3) {
		transform: rotate(0deg);
	}

	.curved-text span:nth-child(4) {
		transform: rotate(10deg);
	}

	.curved-text span:nth-child(5) {
		transform: rotate(20deg);
	}
</style>
