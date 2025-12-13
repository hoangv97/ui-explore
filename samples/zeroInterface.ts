export const ZERO_INTERFACE_SAMPLE = `<div class="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#FAFAFA] rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 shadow-sm">
  
  <!-- Ambient Background -->
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-purple-50/50"></div>

  <!-- Central Element -->
  <div class="relative z-10 flex flex-col items-center">
    <!-- Breathing Orb -->
    <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 blur-xl opacity-20 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div class="w-16 h-16 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white flex items-center justify-center relative">
       <div class="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
    </div>

    <h2 class="mt-8 text-2xl font-light text-gray-800 tracking-tight text-center">
      Good evening, Alex.
    </h2>
    <p class="mt-2 text-gray-400 text-sm font-medium animate-pulse">
      Listening...
    </p>
  </div>

  <!-- Contextual suggestions (appear only when needed) -->
  <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-3 opacity-0 hover:opacity-100 transition-opacity duration-500">
    <button class="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-500 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
      "Play Music"
    </button>
    <button class="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-500 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
      "Lights Off"
    </button>
  </div>
</div>`;