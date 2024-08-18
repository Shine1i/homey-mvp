<script lang="ts">
	import { Application } from '@splinetool/runtime';
	import { fly, fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { isDisplayed } from '$lib/states.svelte';

	let showText = $state(true);
	let showBlob = $state(false);

	$effect(() => {
		const canvas = document.getElementById('canvas3d');
		const app = new Application(canvas as HTMLCanvasElement);

		app.load('https://prod.spline.design/o3671J7IldJfdWmu/scene.splinecode').then(() => {
			app.setZoom(0.5);
			showText = true;
			showBlob = true;
		});
	});
</script>

<!--<div-->
<!--	class="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-amber-500 opacity-80"-->
<!--&gt;</div>-->

<div
	class:blur-xl={isDisplayed.visible}
	class:opacity-50={isDisplayed.visible}
	class=" z-10 flex flex-col justify-between h-dvh"
>
	{#if showBlob}
		<div
			in:fade={{ duration: 1000 }}
			class="absolute bottom-14 top-0 left-1/2 transform animate-pulse -translate-x-1/2 w-96 h-96 bg-emerald-200 rounded-b-full filter blur-lg opacity-75"
		></div>
	{/if}
	<div class="flex-grow flex flex-col items-center justify-center relative">
		<div class="relative min-w-[20rem] min-h-[23rem]">
			<canvas id="canvas3d" class="absolute left-0 z-10 w-full h-full pointer-events-none"></canvas>
		</div>
		{#if showText}
			<div class="relative w-72 h-40 mx-auto -mt-4">
				<div
					in:fly={{ x: -300, duration: 1000 }}
					class="absolute w-full h-full flex items-center justify-center"
				>
					<h1 class="curved-text text-5xl font-pacifico font-medium tracking-wide text-cyan-400">
						<span>h</span><span>o</span><span>m</span><span class="text-emerald-500">e</span><span
							>y</span
						>
					</h1>
				</div>
			</div>
			<div class="relative inline-block">
				<div
					in:fly={{ x: -300, duration: 1000 }}
					class="font-sans -skew-x-12 tracking-wide text-lg font-medium text-opacity-80 bg-gradient-to-r from-cyan-300 via-emerald-500 to-cyan-300 inline-block text-transparent bg-clip-text"
				>
					Match with your dream space
				</div>
				<div class="light-effect"></div>
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
			class="w-full rounded-xl bg-stone-200 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
		>
			Sign up
		</button>
		<button
			onclick={() => {
				isDisplayed.visible = true;
				isDisplayed.isRegister = false;
			}}
			type="button"
			class="w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
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
	@keyframes moveLight {
		0% {
			left: -100%;
		}
		100% {
			left: 200%;
		}
	}

	.light-effect {
		position: absolute;
		top: 0;
		left: -100%;
		width: 50%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.54), transparent);
		transform: skew(-45deg);
		animation: moveLight 3s infinite;
		pointer-events: none;
		mix-blend-mode: overlay;
	}

	.relative:hover .light-effect {
		animation-duration: 1.5s;
	}
</style>
