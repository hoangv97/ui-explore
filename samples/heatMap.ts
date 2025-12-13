export const HEAT_MAP_SAMPLE = `<div class="w-full max-w-md mx-auto bg-gray-900 p-6 rounded-xl shadow-2xl">
  <div class="flex justify-between items-center mb-6">
    <h3 class="text-white font-bold text-lg">Server Usage Heatmap</h3>
    <div class="text-xs text-gray-400">Live 24h</div>
  </div>

  <div class="grid grid-cols-12 gap-1 mb-2">
    <!-- Header Row (Hours) -->
    <div class="col-span-12 flex justify-between text-[10px] text-gray-500 px-1 mb-1 font-mono">
      <span>00:00</span>
      <span>12:00</span>
      <span>23:59</span>
    </div>
  </div>
  
  <div class="space-y-1">
    <!-- Row 1: CPU -->
    <div class="flex items-center gap-2">
      <span class="text-xs font-mono text-gray-400 w-8 text-right">CPU</span>
      <div class="flex-1 grid grid-cols-24 gap-px h-6 bg-gray-800 p-px rounded border border-gray-800">
         <!-- Simulated Heatmap Data Points -->
         <div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#3b82f6] opacity-30"></div><div class="bg-[#3b82f6] opacity-40"></div><div class="bg-[#3b82f6] opacity-20"></div>
         <div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#22c55e] opacity-60"></div><div class="bg-[#eab308] opacity-80"></div><div class="bg-[#ef4444] opacity-90 hover:scale-125 transition-transform cursor-pointer relative group"><div class="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black text-white text-[9px] py-1 px-2 rounded">98%</div></div>
         <div class="bg-[#eab308] opacity-70"></div><div class="bg-[#22c55e] opacity-50"></div><div class="bg-[#3b82f6] opacity-30"></div><div class="bg-[#3b82f6] opacity-20"></div>
         <div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#3b82f6] opacity-30"></div><div class="bg-[#3b82f6] opacity-40"></div>
         <div class="bg-[#3b82f6] opacity-30"></div><div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#3b82f6] opacity-20"></div>
         <div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#3b82f6] opacity-20"></div><div class="bg-[#3b82f6] opacity-20"></div>
      </div>
    </div>

    <!-- Row 2: MEM -->
    <div class="flex items-center gap-2">
      <span class="text-xs font-mono text-gray-400 w-8 text-right">MEM</span>
      <div class="flex-1 grid grid-cols-24 gap-px h-6 bg-gray-800 p-px rounded border border-gray-800">
         <div class="bg-[#a855f7] opacity-40"></div><div class="bg-[#a855f7] opacity-40"></div><div class="bg-[#a855f7] opacity-50"></div><div class="bg-[#a855f7] opacity-50"></div>
         <div class="bg-[#a855f7] opacity-50"></div><div class="bg-[#a855f7] opacity-60"></div><div class="bg-[#a855f7] opacity-60"></div><div class="bg-[#a855f7] opacity-70"></div>
         <div class="bg-[#a855f7] opacity-70"></div><div class="bg-[#a855f7] opacity-80"></div><div class="bg-[#a855f7] opacity-80"></div><div class="bg-[#a855f7] opacity-80"></div>
         <div class="bg-[#a855f7] opacity-80"></div><div class="bg-[#a855f7] opacity-80"></div><div class="bg-[#a855f7] opacity-70"></div><div class="bg-[#a855f7] opacity-70"></div>
         <div class="bg-[#a855f7] opacity-60"></div><div class="bg-[#a855f7] opacity-60"></div><div class="bg-[#a855f7] opacity-50"></div><div class="bg-[#a855f7] opacity-50"></div>
         <div class="bg-[#a855f7] opacity-40"></div><div class="bg-[#a855f7] opacity-40"></div><div class="bg-[#a855f7] opacity-40"></div><div class="bg-[#a855f7] opacity-40"></div>
      </div>
    </div>

    <!-- Row 3: NET -->
    <div class="flex items-center gap-2">
      <span class="text-xs font-mono text-gray-400 w-8 text-right">NET</span>
      <div class="flex-1 grid grid-cols-24 gap-px h-6 bg-gray-800 p-px rounded border border-gray-800">
         <div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div>
         <div class="bg-[#14b8a6] opacity-90"></div><div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div>
         <div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-90"></div><div class="bg-[#14b8a6] opacity-80"></div><div class="bg-[#14b8a6] opacity-20"></div>
         <div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div>
         <div class="bg-[#14b8a6] opacity-50"></div><div class="bg-[#14b8a6] opacity-60"></div><div class="bg-[#14b8a6] opacity-70"></div><div class="bg-[#14b8a6] opacity-40"></div>
         <div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div><div class="bg-[#14b8a6] opacity-20"></div>
      </div>
    </div>
  </div>

  <div class="mt-6 flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-4">
     <div class="flex items-center gap-2">
       <span>Low</span>
       <div class="flex gap-0.5">
          <div class="w-2 h-2 bg-gray-600 opacity-20"></div>
          <div class="w-2 h-2 bg-gray-600 opacity-40"></div>
          <div class="w-2 h-2 bg-gray-600 opacity-60"></div>
          <div class="w-2 h-2 bg-gray-600 opacity-80"></div>
          <div class="w-2 h-2 bg-gray-600 opacity-100"></div>
       </div>
       <span>High</span>
     </div>
     <button class="text-blue-400 hover:text-blue-300 transition-colors">View Logs</button>
  </div>
</div>`;