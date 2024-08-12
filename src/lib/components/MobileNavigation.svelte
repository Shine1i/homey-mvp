<script>
	import { Icon, Home, BookmarkSquare, Map, User } from 'svelte-hero-icons';

	const navItems = [
		{ icon: Home, current: true },
		{ icon: BookmarkSquare, current: false },
		{ icon: Map, current: false },
		{ icon: User, current: false }
	];
</script>

<nav
	class="fixed bottom-0 w-full p-4 bg-[#1A1A2E]/75 ring-2 ring-amber-400/35 shadow-lg rounded-t-3xl"
>
	<div class="flex flex-row justify-between items-center">
		{#each navItems as item}
			<div class="flex group">
				<a
					href="#"
					class="px-3 {item.current ? 'text-amber-400' : 'text-gray-400'} hover:text-amber-400"
				>
					<span class="flex flex-col gap-1.5 items-center">
						<div class="relative">
							<Icon src={item.icon} class="w-6 h-6 z-10" />
							{#if item.current}
								<Icon src={item.icon} class="w-6 h-6 absolute inset-0 text-amber-200 blur" />
							{/if}
						</div>
						<span
							class="h-2 w-2 mt-1 rounded-full {item.current
								? 'bg-amber-400'
								: ''} group-hover:bg-amber-400 transition-all duration-150 delay-100"
						></span>
					</span>
				</a>
			</div>
		{/each}
	</div>
</nav>
