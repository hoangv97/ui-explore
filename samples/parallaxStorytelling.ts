export const PARALLAX_STORYTELLING_SAMPLE = `<div class="w-full max-w-md mx-auto h-[500px] overflow-y-auto overflow-x-hidden bg-slate-900 rounded-xl relative scroll-smooth perspective-container shadow-2xl">
  
  <!-- Fixed Background Layer (Deep) -->
  <div class="absolute inset-0 z-0 h-[1000px] w-full pointer-events-none">
     <div class="fixed top-20 left-10 w-24 h-24 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
     <div class="fixed bottom-40 right-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
  </div>

  <!-- Content Sections -->
  <div class="relative z-10">
    <!-- Section 1 -->
    <div class="h-[400px] flex flex-col items-center justify-center text-center p-8 sticky top-0">
      <span class="text-blue-400 font-mono text-sm mb-4">Chapter 01</span>
      <h2 class="text-4xl font-bold text-white mb-6">The Descent</h2>
      <p class="text-slate-400 max-w-xs mx-auto leading-relaxed">
        Scroll down to dive deeper into the narrative layers.
      </p>
      <div class="mt-12 animate-bounce text-white">↓</div>
    </div>

    <!-- Parallax Image Layer (Middle) -->
    <div class="h-[300px] flex items-center justify-center relative overflow-hidden my-10">
       <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
       <div class="w-48 h-64 bg-slate-800 rounded-lg shadow-2xl transform rotate-3 flex items-center justify-center border border-slate-700 z-20">
          <span class="text-6xl">🏔️</span>
       </div>
       <div class="absolute top-10 right-10 w-20 h-20 bg-slate-700 rounded-lg transform -rotate-12 blur-sm z-10"></div>
       <div class="absolute bottom-10 left-10 w-24 h-24 bg-slate-700 rounded-lg transform rotate-12 blur-sm z-10"></div>
    </div>

    <!-- Section 2 -->
    <div class="h-[400px] flex flex-col items-center justify-center text-center p-8 bg-slate-900/90 backdrop-blur-md border-t border-white/10">
      <span class="text-purple-400 font-mono text-sm mb-4">Chapter 02</span>
      <h2 class="text-4xl font-bold text-white mb-6">The Core</h2>
      <p class="text-slate-400 max-w-xs mx-auto leading-relaxed">
        You have reached the bottom. The story connects here.
      </p>
      <button class="mt-8 px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform">
        Restart
      </button>
    </div>
  </div>
</div>

<style>
/* Simple CSS Parallax Simulation for container */
.perspective-container {
  perspective: 1px;
  transform-style: preserve-3d;
}
</style>`;