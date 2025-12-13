export const BIOMIMETIC_SAMPLE = `<div class="w-full max-w-md mx-auto bg-[#001E3C] p-8 rounded-[40px] relative overflow-hidden shadow-2xl">
  <!-- Living Background -->
  <div class="absolute inset-0 bg-gradient-to-b from-[#001E3C] to-[#001220]"></div>
  <div class="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1),transparent_70%)] animate-pulse-slow"></div>
  
  <!-- Cellular Shape 1 -->
  <div class="absolute top-10 right-[-20px] w-32 h-32 bg-[#FF7F50]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-xl animate-morph"></div>
  
  <!-- Cellular Shape 2 -->
  <div class="absolute bottom-10 left-[-20px] w-40 h-40 bg-[#00FF41]/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-xl animate-morph animation-delay-2000"></div>

  <div class="relative z-10 flex flex-col h-full items-center text-center">
    <div class="w-20 h-20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-br from-[#00FF41] to-[#0080FF] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,255,65,0.3)] animate-breath">
      <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
    </div>

    <h2 class="text-3xl font-light text-white mb-4 tracking-wide">Breathe</h2>
    <p class="text-blue-200/70 text-sm leading-relaxed mb-12 max-w-xs">
      Synchronize with the digital ecosystem. Generative patterns that adapt to your rhythm.
    </p>

    <!-- Glass Morphic Button -->
    <button class="w-full py-4 rounded-[20px] bg-white/5 border border-white/10 text-white font-medium backdrop-blur-md shadow-lg hover:bg-white/10 transition-all group overflow-hidden relative">
      <div class="absolute inset-0 bg-gradient-to-r from-[#00FF41]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span class="relative z-10">Start Session</span>
    </button>
    
    <div class="mt-8 flex gap-2">
       <div class="w-2 h-2 rounded-full bg-[#00FF41] animate-bounce"></div>
       <div class="w-2 h-2 rounded-full bg-[#00FF41]/50 animate-bounce animation-delay-200"></div>
       <div class="w-2 h-2 rounded-full bg-[#00FF41]/20 animate-bounce animation-delay-400"></div>
    </div>
  </div>
</div>

<style>
@keyframes morph {
  0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0,0); }
  33% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; transform: translate(10px,-10px); }
  66% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; transform: translate(-5px,10px); }
  100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0,0); }
}
@keyframes breath {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
.animate-morph { animation: morph 8s ease-in-out infinite; }
.animate-breath { animation: breath 4s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
</style>`;