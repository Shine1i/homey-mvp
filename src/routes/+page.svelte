<script lang="ts">
    import { Application } from "@splinetool/runtime";
    import { fly, fade } from 'svelte/transition';
    
    let showText = $state(false);
    let showBlob = $state(false);
    
    $effect(() => {
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas as HTMLCanvasElement);
        
        app
          .load('https://prod.spline.design/DOrVpQUMc6dpaqD9/scene.splinecode')
          .then(()=>{
              app.setZoom(0.5);
              showText = true;
              showBlob = true;
              
          });
    });
</script>

<div class="flex flex-col justify-between h-screen">
  <div class="flex-grow flex flex-col items-center relative justify-center">
    <div class="min-h-80 relative">
      <canvas id="canvas3d" class="w-full pointer-events-none left-4 z-10 relative !max-h-80"></canvas>
      {#if showBlob}
        <div
            in:fade={{ duration: 1000 }}
            class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-purple-300  rounded-full filter blur-xl opacity-70"
        ></div>
      {/if}
    </div>
      {#if showText}
        <div
            in:fly={{ x: -300, duration: 1000 }}
            class="text-5xl font-bold tracking-tighter text-purple-200 mt-12 text-center"
        >
          h<span class="">o</span>m<span class="inline-block text-amber-400 animate-bounce">i</span>e
        </div>
      {/if}
  </div>
  
  <div class="w-full p-4 space-y-2">
    <button type="button" class="w-full rounded-full bg-purple-200 px-3.5 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
    <button type="button" class="w-full rounded-full bg-amber-400 px-3.5 py-3.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Log in</button>
  </div>
</div>

<style>
    #canvas3d {
        max-width: 100dvw;
        max-height: 70vh;
        object-fit: contain;
    }
</style>