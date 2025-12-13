export const Y2K_AESTHETIC_SAMPLE = `<div class="w-full max-w-md mx-auto bg-gradient-to-b from-[#e0e0e0] to-[#c0c0c0] p-1 border-2 border-white outline outline-1 outline-gray-400 shadow-xl">
  <!-- Window Header -->
  <div class="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 flex justify-between items-center text-white font-bold font-sans text-sm">
    <div class="flex items-center gap-2">
      <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" class="w-4 h-4" />
      <span>CYBER_PLAYER.EXE</span>
    </div>
    <div class="flex gap-1">
      <button class="w-4 h-4 bg-gray-300 text-black flex items-center justify-center border border-white border-b-gray-600 border-r-gray-600 text-[10px] leading-none shadow-[inset_1px_1px_0px_white]">_</button>
      <button class="w-4 h-4 bg-gray-300 text-black flex items-center justify-center border border-white border-b-gray-600 border-r-gray-600 text-[10px] leading-none shadow-[inset_1px_1px_0px_white]">□</button>
      <button class="w-4 h-4 bg-gray-300 text-black flex items-center justify-center border border-white border-b-gray-600 border-r-gray-600 text-[10px] leading-none shadow-[inset_1px_1px_0px_white]">x</button>
    </div>
  </div>

  <!-- Content Area -->
  <div class="bg-black p-6 font-mono relative overflow-hidden">
    <!-- Matrix/Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
    
    <div class="relative z-10 text-center">
      <h2 class="text-[#FF69B4] text-3xl font-bold italic tracking-widest drop-shadow-[2px_2px_0px_#00FFFF] mb-6 animate-pulse">
        FUTURE<br>VIBES
      </h2>

      <!-- CD Player Visual -->
      <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-gray-300 to-white border-4 border-gray-400 shadow-[0_0_15px_rgba(255,255,255,0.5)] flex items-center justify-center mb-8 animate-[spin_4s_linear_infinite]">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white"></div>
        <div class="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/30 to-transparent pointer-events-none"></div>
      </div>

      <!-- Marquee -->
      <div class="bg-black border border-[#00FFFF] text-[#00FFFF] px-2 py-1 mb-6 overflow-hidden whitespace-nowrap font-bold text-xs">
        <span class="inline-block animate-[marquee_5s_linear_infinite]">>>> DOWNLOADING SYSTEM UPDATE... 99% COMPLETE >>> INSERT DISC 2 >>></span>
      </div>

      <div class="flex justify-center gap-4">
        <button class="px-6 py-2 bg-gradient-to-b from-[#f0f0f0] to-[#b0b0b0] border-2 border-white border-b-gray-600 border-r-gray-600 text-black font-bold text-xs active:border-gray-600 active:border-b-white active:border-r-white active:bg-gray-400">
          PLAY
        </button>
        <button class="px-6 py-2 bg-gradient-to-b from-[#f0f0f0] to-[#b0b0b0] border-2 border-white border-b-gray-600 border-r-gray-600 text-black font-bold text-xs active:border-gray-600 active:border-b-white active:border-r-white active:bg-gray-400">
          ABORT
        </button>
      </div>
    </div>
  </div>
  
  <!-- Status Bar -->
  <div class="bg-gray-300 px-2 py-1 text-[10px] flex gap-4 border-t border-white shadow-[inset_1px_1px_0px_gray]">
    <span>Ready</span>
    <span class="flex-1"></span>
    <span>MEM: 64MB</span>
  </div>
</div>
<style>
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
</style>`;