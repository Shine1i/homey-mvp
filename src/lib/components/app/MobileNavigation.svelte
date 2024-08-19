<script lang="ts">
	import { Icon, Home, BookmarkSquare, Map, User } from 'svelte-hero-icons';

	const navItems = [
		{ icon: Home, current: true },
		{ icon: BookmarkSquare, current: false },
		{ icon: Map, current: false },
		{ icon: User, current: false }
	];
	let { class: className }: { class: string } = $props();
</script>

<div class="fixed bottom-0 p-2 h-fit left-0 w-full">
	<!--	<div class="absolute bottom-0 p-2 left-0 w-full bg-violet-400 blur-2xl z-20 h-12"></div>-->
	<!--	<div-->
	<!--		class="absolute bottom-0 pointer-events-none w-full left-0 bg-gradient-to-t z-20 from-emerald-500/40 via-cyan-950/20 h-96 to-transparent opacity-40"-->
	<!--	></div>-->
	<nav
		class="fixed bottom-0 p-2 py-3.5 left-0 bg-emerald-50 z-20 backdrop-blur-2xl {className} w-full"
	>
		<div class="flex justify-evenly gap-8 items-center">
			{#each navItems as item}
				<div class="flex group">
					<a
						href="#"
						class=" {item.current ? 'text-emerald-400' : 'text-stone-800'} hover:text-amber-400"
					>
						<span class="flex flex-col gap-1.5 items-center">
							<div class="relative">
								<Icon src={item.icon} class="w-6 h-6 z-10 " />
								{#if item.current}
									<Icon src={item.icon} class="w-6 h-6 absolute inset-0 text-emerald-400 blur" />
								{/if}
							</div>
							<span
								class="h-2 w-2 mt-1 rounded-full {item.current
									? 'bg-emerald-400'
									: ''} group-hover:bg-amber-400 transition-all duration-150 delay-100"
							></span>
						</span>
					</a>
				</div>
			{/each}
		</div>
	</nav>
</div>
