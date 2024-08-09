<script lang="ts" ✂prettier:content✂="CglpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0BzcGxpbmV0b29sL3J1bnRpbWUnOwoJaW1wb3J0IHsgZmx5LCBmYWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nOwoJCglpbXBvcnQge2lzRGlzcGxheWVkfSBmcm9tICckbGliL3N0YXRlcy5zdmVsdGUnOwoKCWxldCBzaG93VGV4dCA9ICRzdGF0ZShmYWxzZSk7CglsZXQgc2hvd0Jsb2IgPSAkc3RhdGUoZmFsc2UpOwoKCSRlZmZlY3QoKCkgPT4gewoJCWNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMzZCcpOwoJCWNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbihjYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpOwoKCQlhcHAubG9hZCgnaHR0cHM6Ly9wcm9kLnNwbGluZS5kZXNpZ24vRE9yVnBRVU1jNmRwYXFEOS9zY2VuZS5zcGxpbmVjb2RlJykudGhlbigoKSA9PiB7CgkJCWFwcC5zZXRab29tKDAuNSk7CgkJCXNob3dUZXh0ID0gdHJ1ZTsKCQkJc2hvd0Jsb2IgPSB0cnVlOwoJCX0pOwoJfSk7Cg==">{}</script>

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

<style ✂prettier:content✂="CgkjY2FudmFzM2QgewoJCW1heC13aWR0aDogMTAwdnc7CgkJbWF4LWhlaWdodDogNzB2aDsKCQlvYmplY3QtZml0OiBjb250YWluOwoJfQoKCS5jdXJ2ZWQtdGV4dCB7CgkJdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsKCX0KCgkuY3VydmVkLXRleHQgc3BhbiB7CgkJcG9zaXRpb246IHJlbGF0aXZlOwoJCWRpc3BsYXk6IGlubGluZS1ibG9jazsKCQl0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTsKCX0KCgkuY3VydmVkLXRleHQgc3BhbjpudGgtY2hpbGQoMSkgewoJCXRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7Cgl9CgoJLmN1cnZlZC10ZXh0IHNwYW46bnRoLWNoaWxkKDIpIHsKCQl0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpOwoJfQoKCS5jdXJ2ZWQtdGV4dCBzcGFuOm50aC1jaGlsZCgzKSB7CgkJdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7Cgl9CgoJLmN1cnZlZC10ZXh0IHNwYW46bnRoLWNoaWxkKDQpIHsKCQl0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7Cgl9CgoJLmN1cnZlZC10ZXh0IHNwYW46bnRoLWNoaWxkKDUpIHsKCQl0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7Cgl9Cg=="></style>
