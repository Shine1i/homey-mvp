<script>
	import '../app.pcss';
	import 'swiper/css/bundle';
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
</script>

<main class="flex flex-col overflow-hidden justify-between w-dvw min-h-dvh h-dvh bg-emerald-50">
	<slot />
	<!--  <nav class="fixed bottom-0 w-full h-24 bg-red-500 bg-nav-background shadow-lg">-->
	<!--   d-->
	<!--    -->
	<!--  </nav>-->
</main>
