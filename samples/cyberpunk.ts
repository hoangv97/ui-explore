export const CYBERPUNK_SAMPLE = `<div class="w-full max-w-md mx-auto bg-[#050505] p-1 rounded border border-[#00ff00] relative overflow-hidden font-mono shadow-[0_0_20px_rgba(0,255,0,0.2)]">
  <!-- Scanline Overlay -->
  <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20"></div>
  
  <!-- Content -->
  <div class="relative z-10 p-6">
    <div class="flex justify-between items-center mb-8 border-b border-[#00ff00]/30 pb-2">
      <h2 class="text-[#00ff00] text-2xl font-bold uppercase tracking-widest drop-shadow-[0_0_5px_#00ff00]">
        TERMINAL<span class="animate-pulse">_</span>
      </h2>
      <span class="text-[#ff00ff] text-xs font-bold border border-[#ff00ff] px-2 py-1">V.2.0.77</span>
    </div>

    <div class="space-y-4 mb-8">
      <div class="flex gap-2 text-[#00ffff]">
        <span>></span>
        <span class="typing-effect">INITIALIZING NEURAL LINK...</span>
      </div>
      <div class="flex gap-2 text-[#00ff00]/80">
        <span>></span>
        <span>ACCESS GRANTED [LVL 5]</span>
      </div>
      <div class="bg-[#00ff00]/10 p-4 border-l-4 border-[#00ff00] text-[#00ff00] text-sm">
        <p class="mb-2">SYSTEM ALERT: UNIDENTIFIED SIGNAL</p>
        <div class="w-full bg-[#003300] h-2">
          <div class="bg-[#00ff00] h-full w-[70%] animate-pulse shadow-[0_0_10px_#00ff00]"></div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <button class="group relative px-6 py-3 bg-transparent border border-[#00ffff] text-[#00ffff] font-bold uppercase tracking-wider overflow-hidden hover:text-black hover:bg-[#00ffff] transition-colors">
        <span class="relative z-10">Decrypt</span>
        <!-- Glitch effect on hover would go here -->
      </button>
      <button class="relative px-6 py-3 bg-[#ff00ff]/20 border border-[#ff00ff] text-[#ff00ff] font-bold uppercase tracking-wider hover:bg-[#ff00ff] hover:text-black transition-colors shadow-[0_0_15px_rgba(255,0,255,0.4)]">
        Execute
      </button>
    </div>
  </div>
</div>`;