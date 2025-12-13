export const HYPERREALISM_SAMPLE = `<div class="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-700 group">
  <!-- Simulated 3D Environment Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
  
  <!-- "3D" Object Placeholder (Pure CSS) -->
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-10 perspective-1000">
     <div class="w-full h-full relative transform-style-3d rotate-y-12 rotate-x-12 animate-float">
        <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-l border-white/30"></div>
        <div class="absolute -inset-1 rounded-2xl bg-blue-500 blur-xl opacity-20"></div>
     </div>
  </div>

  <!-- Foreground UI Overlay -->
  <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-end z-20">
    <div class="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5 shadow-2xl transform transition-transform duration-500 hover:scale-105">
      <h3 class="text-white text-xl font-bold mb-1">Hyper Object</h3>
      <p class="text-gray-300 text-xs mb-4 leading-relaxed">
        Interactive 3D asset rendering with real-time lighting physics.
      </p>
      
      <div class="flex gap-3">
        <button class="flex-1 bg-white text-black py-2 rounded-lg text-sm font-bold shadow-[0_5px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-1">
          Inspect
        </button>
        <button class="px-4 py-2 rounded-lg bg-black/50 text-white border border-white/20 hover:bg-white/20 transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
.perspective-1000 { perspective: 1000px; }
.transform-style-3d { transform-style: preserve-3d; }
@keyframes float {
  0% { transform: rotateY(10deg) rotateX(10deg) translateY(0px); }
  50% { transform: rotateY(-5deg) rotateX(5deg) translateY(-20px); }
  100% { transform: rotateY(10deg) rotateX(10deg) translateY(0px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
</style>`;