<script lang="ts">
	import {
		Bathtub,
		Local_laundry_service,
		Wash,
		Elevator,
		Local_parking,
		Wifi,
		Tv,
		Hvac,
		Electric_bolt,
		Garage,
		Water_drop,
		Balcony
	} from 'svelte-google-materialdesign-icons';
	import type { Listing, ObjectAdDetails } from '$lib/utils';
	import DryCleaning from 'svelte-google-materialdesign-icons/Dry_cleaning.svelte';

	export let object_ad: ObjectAdDetails;

	const AmenityIcon = ({ icon: Icon, label, isActive }) => ({
		component: Icon,
		label,
		isActive
	});

	const amenities = [
		AmenityIcon({ icon: Bathtub, label: 'Badkar', isActive: object_ad.has_bathtub }),
		AmenityIcon({
			icon: Local_laundry_service,
			label: 'Tvättmaskin',
			isActive: object_ad.has_washing_machine
		}),
		AmenityIcon({ icon: Wash, label: 'Diskmaskin', isActive: object_ad.has_dishwasher }),
		AmenityIcon({ icon: Elevator, label: 'Hiss', isActive: object_ad.has_elevator }),
		AmenityIcon({ icon: DryCleaning, label: 'Torktumlare', isActive: object_ad.has_drier }),
		AmenityIcon({ icon: Balcony, label: 'Balkong', isActive: object_ad.has_balcony })
	];

	const includedInRent = [
		AmenityIcon({ icon: Wifi, label: 'Internet', isActive: object_ad.internet_included }),
		AmenityIcon({ icon: Tv, label: 'Kabel-TV', isActive: object_ad.tv_included }),
		AmenityIcon({ icon: Hvac, label: 'Värme', isActive: object_ad.heat_included }),
		AmenityIcon({ icon: Electric_bolt, label: 'El', isActive: object_ad.electricity_included }),
		AmenityIcon({ icon: Local_parking, label: 'Parkering', isActive: object_ad.has_parking }),
		AmenityIcon({ icon: Garage, label: 'Garage', isActive: object_ad.has_garage })
	];
</script>

<div class="max-w-2xl mx-auto">
	<h2 class="text-xl font-medium mb-4">Bekvämligheter</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
		{#each amenities as { component: Icon, label, isActive }}
			<div
				class="flex items-center space-x-2"
				class:text-cyan-600={isActive}
				class:text-stone-400={!isActive}
			>
				<svelte:component this={Icon} size="24" />
				<span class="text-sm">{label}</span>
			</div>
		{/each}
	</div>

	<h2 class="text-xl font-medidum mb-4">Ingår i hyran</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		{#each includedInRent as { component: Icon, label, isActive }}
			<div
				class="flex items-center space-x-2"
				class:text-cyan-600={isActive}
				class:text-stone-400={!isActive}
			>
				<svelte:component this={Icon} size="24" />
				<span class="text-sm">{label}</span>
			</div>
		{/each}
	</div>
</div>
