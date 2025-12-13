export const PIXEL_ART_SAMPLE = `<div class="w-full max-w-md mx-auto bg-[#5c94fc] p-8 border-4 border-white shadow-[0_0_0_4px_black] image-rendering-pixelated font-mono">
  <div class="bg-[#f8d878] border-4 border-black p-4 mb-6 shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
    <div class="flex gap-4 items-start">
      <!-- 8-bit Avatar -->
      <div class="w-16 h-16 bg-[#e75a10] border-4 border-black relative">
        <div class="absolute top-2 left-2 w-2 h-2 bg-black"></div>
        <div class="absolute top-2 right-4 w-2 h-2 bg-black"></div>
        <div class="absolute bottom-3 left-3 w-8 h-2 bg-black"></div>
      </div>
      
      <div class="flex-1">
        <h2 class="text-xl font-bold text-black mb-1 uppercase leading-none">Player 1</h2>
        <p class="text-xs text-black mb-2">Score: 999999</p>
        <div class="w-full h-4 border-2 border-black bg-[#940000]">
          <div class="h-full w-[80%] bg-[#00e700]"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="space-y-4 text-center">
    <button class="w-full bg-[#e75a10] text-white font-bold py-3 border-4 border-black shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none hover:bg-[#ff7b2f] transition-none uppercase tracking-widest text-sm">
      Start Game
    </button>
    
    <button class="w-full bg-[#6b8cff] text-white font-bold py-3 border-4 border-black shadow-[inset_-4px_-4px_0_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none hover:bg-[#8ca6ff] transition-none uppercase tracking-widest text-sm">
      Options
    </button>
  </div>

  <!-- Decorative Pixel Clouds -->
  <div class="mt-8 flex justify-between px-4 opacity-80">
     <div class="w-12 h-8 bg-white relative">
       <div class="absolute -top-4 left-2 w-8 h-4 bg-white"></div>
     </div>
     <div class="w-16 h-8 bg-white relative top-2">
        <div class="absolute -top-4 left-4 w-8 h-4 bg-white"></div>
     </div>
  </div>
</div>
<style>
.image-rendering-pixelated { image-rendering: pixelated; }
</style>`;