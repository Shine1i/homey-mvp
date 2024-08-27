<script>
	import { Home } from 'svelte-google-materialdesign-icons';
	import MobileNavigation from '$lib/components/app/MobileNavigation.svelte';
</script>

<!--<div class="absolute inset-0 h-1/2 to-transparent opacity-40"></div>-->
<div class="container mx-auto z-10 px-4 grid grid-cols-4 gap-4">
	<slot />
	<MobileNavigation class="w-[calc(100%)] " />
</div>
