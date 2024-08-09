<script>
	import WelcomeScreen from '$lib/components/WelcomeScreen.svelte';
	import Registration from '$lib/components/Registration.svelte';
	import { isDisplayed } from '$lib/states.svelte';
</script>

<WelcomeScreen />

{#if isDisplayed.visible}
	<Registration />
{/if}
