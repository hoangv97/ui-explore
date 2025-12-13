export const AI_NATIVE_SAMPLE = `<div class="w-full max-w-lg mx-auto bg-[#F9FAFB] p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-[500px]">
  <!-- Header -->
  <div class="flex justify-between items-center mb-6">
    <div class="flex items-center gap-2">
      <div class="w-2 h-2 bg-[#6366F1] rounded-full animate-pulse"></div>
      <span class="text-xs font-semibold text-gray-500 uppercase tracking-widest">Assistant</span>
    </div>
    <div class="p-1.5 bg-white rounded-lg border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50">
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
    </div>
  </div>

  <!-- Chat Area -->
  <div class="flex-1 space-y-6 overflow-y-auto mb-6 pr-2 custom-scrollbar">
    <!-- User Message -->
    <div class="flex justify-end">
      <div class="bg-white border border-gray-200 text-gray-800 px-4 py-2.5 rounded-[20px_20px_4px_20px] shadow-sm max-w-[85%] text-sm leading-relaxed">
        Analyze the Q3 sales data and generate a summary.
      </div>
    </div>

    <!-- AI Message (Streaming effect) -->
    <div class="flex justify-start gap-3">
      <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6366F1] to-[#A855F7] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-indigo-200">
        AI
      </div>
      <div class="space-y-2 max-w-[90%]">
        <div class="text-gray-700 text-sm leading-relaxed">
          <span class="font-semibold text-gray-900">Q3 Analysis:</span> Based on the dataset, revenue increased by <span class="bg-green-100 text-green-700 px-1 rounded text-xs font-medium">+12.4%</span>.
        </div>
        <!-- Context Card -->
        <div class="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-3">
           <div class="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
           </div>
           <div>
             <div class="text-xs font-bold text-gray-900">Sales_Report_Q3.pdf</div>
             <div class="text-[10px] text-gray-400">Generated 2s ago</div>
           </div>
        </div>
        <div class="text-gray-700 text-sm leading-relaxed">
          Would you like me to forecast Q4? <span class="inline-block w-1.5 h-4 bg-gray-400 align-middle animate-pulse ml-1"></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Input Area -->
  <div class="relative">
    <input type="text" placeholder="Ask anything..." class="w-full bg-white border border-gray-200 pl-4 pr-12 py-3.5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-[#6366F1]/20 focus:border-[#6366F1] outline-none text-sm transition-all" />
    <button class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#6366F1] text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
    </button>
  </div>
</div>`;