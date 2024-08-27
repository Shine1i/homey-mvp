<script lang="ts">
	import { Map } from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import { onDestroy, onMount } from 'svelte';
	import { getCurrentPosition, watchPosition, type Position } from '@tauri-apps/plugin-geolocation';
	import { PUBLIC_MAPBOX } from '$env/static/public';

	let map: Map;
	let mapContainer: HTMLElement;
	let lng: number = 13.5036;
	let lat: number = 59.3793;
	let zoom: number = 9;

	function updateData() {
		zoom = map.getZoom();
		lng = map.getCenter().lng;
		lat = map.getCenter().lat;
	}

	onMount(async () => {
		const initialState = { lng, lat, zoom };

		map = new Map({
			container: mapContainer,
			accessToken: PUBLIC_MAPBOX,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});

		map.on('move', updateData);
		map.on('style.load', () => {
			map.setConfigProperty('basemap', 'lightPreset', 'dusk');
		});

		try {
			const posResult = await getCurrentPosition({
				enableHighAccuracy: true,
				timeout: 10000,
				maximumAge: 0
			});

			if (posResult.status === 'ok') {
				const position = posResult;
				lng = position.data.coords.longitude;
				lat = position.data.coords.latitude;
				zoom = map.getZoom();
				map.setCenter([lng, lat]);
			}

			await watchPosition({ enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }, (posi) => {
				if (typeof posi === 'string') {
					console.error('Error:', posi);
				} else {
					lng = posi.coords.longitude;
					lat = posi.coords.latitude;
					map.setCenter([lng, lat]);
				}
			});
		} catch (error) {
			console.error('Geolocation error:', error);
		}
	});

	onDestroy(() => {
		map.remove();
	});
</script>

<div class="sidebar">
	Longitude: {lng.toFixed(4)} | Latitude: {lat.toFixed(4)} | Zoom: {zoom.toFixed(2)}
</div>
<div class="map-wrap">
	<div class="map" bind:this={mapContainer} />
</div>

<style>
	.map {
		position: absolute;
		width: 100%;
		height: 100vh;
	}
	.sidebar {
		background-color: rgba(35, 55, 75, 0.9);
		color: white;
		padding: 6px 12px;
		font-family: monospace;
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		margin: 12px;
		border-radius: 4px;
	}
</style>
