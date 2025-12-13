export const SCI_FI_HUD_SAMPLE = `<div class="w-full max-w-md mx-auto bg-black p-6 relative overflow-hidden font-mono text-[#00FFFF] border border-[#00FFFF]/30 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
  <!-- Grid Overlay -->
  <div class="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
  
  <!-- Rotating Circle Animation -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#00FFFF]/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-[#00FFFF]/30 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none"></div>

  <div class="relative z-10">
    <div class="flex justify-between items-center mb-8 border-b border-[#00FFFF]/50 pb-2">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 bg-[#00FFFF] animate-pulse"></div>
        <h2 class="text-sm font-bold tracking-[0.2em]">SYSTEM_READY</h2>
      </div>
      <span class="text-xs opacity-70">T-MINUS 00:42</span>
    </div>

    <div class="grid grid-cols-2 gap-6 mb-8">
      <div class="relative p-4 border border-[#00FFFF]/30 bg-[#00FFFF]/5 backdrop-blur-sm">
        <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00FFFF]"></div>
        <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00FFFF]"></div>
        <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00FFFF]"></div>
        <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00FFFF]"></div>
        
        <h3 class="text-xs uppercase opacity-70 mb-1">Shield Integrity</h3>
        <div class="text-2xl font-bold text-shadow-glow">98%</div>
        <div class="w-full bg-[#003333] h-1 mt-2">
          <div class="bg-[#00FFFF] h-full w-[98%] shadow-[0_0_10px_#00FFFF]"></div>
        </div>
      </div>

      <div class="relative p-4 border border-[#FF0000]/50 bg-[#FF0000]/5 backdrop-blur-sm text-[#FF5555]">
        <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FF0000]"></div>
        <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FF0000]"></div>
        <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#FF0000]"></div>
        <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FF0000]"></div>
        
        <h3 class="text-xs uppercase opacity-70 mb-1">Threat Level</h3>
        <div class="text-2xl font-bold animate-pulse">CRITICAL</div>
        <div class="w-full bg-[#330000] h-1 mt-2">
          <div class="bg-[#FF0000] h-full w-[85%] shadow-[0_0_10px_#FF0000]"></div>
        </div>
      </div>
    </div>

    <div class="flex gap-4">
      <button class="flex-1 py-2 border border-[#00FFFF] text-[#00FFFF] text-xs font-bold uppercase tracking-widest hover:bg-[#00FFFF] hover:text-black transition-colors clip-path-slant">
        Initiate
      </button>
      <button class="flex-1 py-2 border border-[#00FFFF]/50 text-[#00FFFF]/50 text-xs font-bold uppercase tracking-widest hover:bg-[#00FFFF]/10 transition-colors clip-path-slant">
        Abort
      </button>
    </div>
  </div>
</div>
<style>
.text-shadow-glow { text-shadow: 0 0 5px #00FFFF; }
.clip-path-slant { clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
</style>`;