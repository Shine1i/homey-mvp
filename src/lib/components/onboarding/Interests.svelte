<script lang="ts">
	let interests = [
		{ content: 'Art', icon: '🎨', enabled: false },
		{ content: 'Make up', icon: '💄', enabled: false },
		{ content: 'Filmmaking', icon: '🎬', enabled: false },
		{ content: 'Dancing', icon: '💃', enabled: false },
		{ content: 'Theatre', icon: '🎭', enabled: false },
		{ content: 'Writing', icon: '✍️', enabled: false },
		{ content: 'Guitar', icon: '🎸', enabled: false },
		{ content: 'Piano', icon: '🎹', enabled: false },
		{ content: 'Pottery', icon: '🏺', enabled: false }
	];

	let selectedInterests: Array<{ content: string; icon: string }> = [];

	function toggleInterest(index: number) {
		interests[index].enabled = !interests[index].enabled;
		if (interests[index].enabled) {
			selectedInterests = [
				...selectedInterests,
				{ content: interests[index].content, icon: interests[index].icon }
			];
		} else {
			selectedInterests = selectedInterests.filter((i) => i.content !== interests[index].content);
		}
	}
</script>

<div class="bg-gray-900 p-6 rounded-lg">
	<h2 class="text-2xl font-bold text-white mb-4">Set your interests</h2>
	<h3 class="text-xl text-gray-300 mb-4">Creativity</h3>
	<div class="flex flex-wrap gap-2">
		{#each interests as interest, index}
			<button
				on:click={() => toggleInterest(index)}
				class="flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 {interest.enabled
					? 'bg-green-600 text-white'
					: 'bg-gray-700 text-gray-300 hover:bg-gray-600'}"
			>
				<span class="mr-1">{interest.icon}</span>
				{interest.content}
			</button>
		{/each}
	</div>
</div>
