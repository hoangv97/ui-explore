export const SKEUOMORPHISM_SAMPLE = `<div class="w-full max-w-md mx-auto p-8 bg-[#d0d0d0] rounded-lg shadow-inner">
  <!-- Metallic Panel Background -->
  <div class="bg-gradient-to-b from-[#e0e0e0] to-[#b0b0b0] p-1 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] border border-[#a0a0a0]">
    <div class="bg-[#dcdcdc] p-6 rounded-lg shadow-[inset_0_2px_5px_rgba(0,0,0,0.1)] border border-[#ffffff]">
      
      <!-- Display Screen (Inset) -->
      <div class="bg-[#333] border-4 border-[#555] rounded shadow-[inset_0_5px_10px_rgba(0,0,0,0.8)] p-4 mb-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <p class="font-mono text-green-400 text-shadow-glow">READY...</p>
      </div>

      <!-- Controls -->
      <div class="grid grid-cols-3 gap-6">
        <!-- Knob -->
        <div class="col-span-1 flex flex-col items-center">
           <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#c0c0c0] shadow-[0_4px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,1)] border border-[#a0a0a0] flex items-center justify-center transform rotate-45 cursor-pointer active:rotate-90 transition-transform">
             <div class="w-1 h-6 bg-[#888] rounded-full shadow-inner"></div>
           </div>
           <span class="text-xs text-gray-600 font-bold mt-2 text-shadow-white">VOL</span>
        </div>

        <!-- Big Button -->
        <div class="col-span-2">
           <button class="w-full h-16 rounded-lg bg-gradient-to-b from-[#ff5f5f] to-[#cc0000] border border-[#a00000] shadow-[0_4px_0_#990000,0_5px_10px_rgba(0,0,0,0.3)] active:translate-y-[4px] active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.4)] text-white font-bold text-lg text-shadow-dark transition-all">
             POWER
           </button>
        </div>
      </div>
      
    </div>
  </div>
</div>
<style>
  .text-shadow-glow { text-shadow: 0 0 5px #4ade80; }
  .text-shadow-white { text-shadow: 0 1px 0 rgba(255,255,255,0.8); }
  .text-shadow-dark { text-shadow: 0 -1px 0 rgba(0,0,0,0.3); }
</style>`;