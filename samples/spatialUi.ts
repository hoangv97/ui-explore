export const SPATIAL_UI_SAMPLE = `<div class="relative w-full max-w-2xl mx-auto h-[500px] rounded-[40px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
  <!-- Immersive Overlay -->
  <div class="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

  <div class="relative z-10 w-full h-full flex items-center justify-center p-8">
    
    <!-- Spatial Window -->
    <div class="w-full max-w-md bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform hover:scale-[1.01] transition-transform duration-500 ease-out">
      
      <!-- Toolbar -->
      <div class="flex justify-center mb-8">
        <div class="flex gap-6 bg-black/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-inner">
          <button class="w-8 h-8 rounded-full bg-white text-black shadow-md flex items-center justify-center hover:scale-110 transition-transform">⌂</button>
          <button class="w-8 h-8 rounded-full text-black/70 hover:bg-white/50 flex items-center justify-center hover:scale-110 transition-transform">◎</button>
          <button class="w-8 h-8 rounded-full text-black/70 hover:bg-white/50 flex items-center justify-center hover:scale-110 transition-transform">⚙</button>
        </div>
      </div>

      <div class="text-center mb-8">
        <h2 class="text-3xl font-semibold text-black/90 mb-2">Spatial Player</h2>
        <p class="text-black/60 font-medium">Immersive Environment</p>
      </div>

      <!-- Media Controls -->
      <div class="flex flex-col gap-4">
        <!-- Progress Bar -->
        <div class="w-full h-2 bg-black/10 rounded-full overflow-hidden">
          <div class="w-1/3 h-full bg-blue-500 rounded-full"></div>
        </div>
        
        <div class="flex justify-between items-center text-black/80 font-medium">
          <span>1:24</span>
          <span>3:45</span>
        </div>

        <div class="flex justify-center gap-8 mt-2 items-center">
           <button class="text-3xl text-black/70 hover:text-black hover:scale-110 transition-all">⏮</button>
           <button class="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-105 hover:bg-gray-900 transition-all">▶</button>
           <button class="text-3xl text-black/70 hover:text-black hover:scale-110 transition-all">⏭</button>
        </div>
      </div>
    </div>
  </div>
</div>`;