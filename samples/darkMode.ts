export const DARK_MODE_SAMPLE = `<div class="bg-black text-gray-200 p-8 rounded-xl border border-gray-800 max-w-md mx-auto shadow-2xl">
   <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold text-white tracking-wide">Sleep Analysis</h2>
      <div class="flex items-center gap-2">
         <span class="text-xs text-green-400 font-medium">Active</span>
         <div class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
      </div>
   </div>
   
   <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-[#121212] p-4 rounded-lg border border-gray-900 hover:border-gray-700 transition-colors">
          <div class="text-xs text-gray-500 uppercase tracking-widest mb-1">Deep Sleep</div>
          <div class="text-2xl font-mono text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]">4h 12m</div>
      </div>
      <div class="bg-[#121212] p-4 rounded-lg border border-gray-900 hover:border-gray-700 transition-colors">
          <div class="text-xs text-gray-500 uppercase tracking-widest mb-1">Quality</div>
          <div class="text-2xl font-mono text-purple-400 drop-shadow-[0_0_5px_rgba(192,132,252,0.5)]">94%</div>
      </div>
   </div>

   <div class="relative h-32 bg-[#0A0E27] rounded-lg border border-gray-800 mb-6 flex items-end px-2 pb-0 overflow-hidden">
      <!-- Simulated Graph -->
      <div class="flex-1 bg-blue-900/30 h-[40%] mx-1 rounded-t-sm"></div>
      <div class="flex-1 bg-blue-600/50 h-[60%] mx-1 rounded-t-sm shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
      <div class="flex-1 bg-blue-500 h-[80%] mx-1 rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
      <div class="flex-1 bg-blue-600/50 h-[50%] mx-1 rounded-t-sm"></div>
      <div class="flex-1 bg-blue-900/30 h-[30%] mx-1 rounded-t-sm"></div>
   </div>
   
   <div class="flex gap-4">
      <button class="flex-1 bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">Details</button>
      <button class="flex-1 bg-[#1A1A1A] text-white py-3 rounded-lg font-medium border border-gray-800 hover:border-gray-600 transition-colors">History</button>
   </div>
</div>`;