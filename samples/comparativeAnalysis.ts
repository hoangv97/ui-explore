export const COMPARATIVE_ANALYSIS_SAMPLE = `<div class="w-full max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
  <div class="flex items-center justify-between mb-8">
    <h2 class="text-2xl font-bold text-gray-800">Performance Comparison</h2>
    <div class="flex items-center bg-gray-100 rounded-lg p-1">
      <button class="px-4 py-1.5 bg-white text-gray-900 shadow-sm rounded-md text-sm font-bold">This Year</button>
      <span class="text-gray-400 px-2 text-sm font-bold">vs</span>
      <button class="px-4 py-1.5 text-gray-500 hover:text-gray-900 text-sm font-medium">Last Year</button>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-8 mb-10">
    <!-- Comparison Card 1 -->
    <div class="p-6 rounded-xl bg-gray-50 border border-gray-200 relative overflow-hidden">
      <h3 class="text-gray-500 font-bold uppercase text-xs tracking-wider mb-4">Total Users</h3>
      <div class="flex justify-between items-end mb-4">
        <div>
          <p class="text-sm text-gray-500 mb-1">Current</p>
          <p class="text-3xl font-extrabold text-blue-600">245k</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500 mb-1">Previous</p>
          <p class="text-2xl font-bold text-gray-400">180k</p>
        </div>
      </div>
      <div class="flex items-center gap-2 bg-green-100 text-green-700 w-fit px-3 py-1 rounded-full text-sm font-bold">
        <span>▲ 36.1%</span>
        <span class="text-green-600 font-normal text-xs">Growth</span>
      </div>
      <!-- Visual Bar -->
      <div class="mt-6 flex gap-1 h-3 rounded-full overflow-hidden bg-gray-200">
         <div class="bg-gray-400 w-[73%] h-full"></div> <!-- Previous -->
         <div class="bg-blue-600 w-[27%] h-full"></div> <!-- Delta -->
      </div>
    </div>

    <!-- Comparison Card 2 -->
    <div class="p-6 rounded-xl bg-gray-50 border border-gray-200 relative overflow-hidden">
      <h3 class="text-gray-500 font-bold uppercase text-xs tracking-wider mb-4">Cost Per Acquisition</h3>
      <div class="flex justify-between items-end mb-4">
        <div>
          <p class="text-sm text-gray-500 mb-1">Current</p>
          <p class="text-3xl font-extrabold text-purple-600">$12.50</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500 mb-1">Previous</p>
          <p class="text-2xl font-bold text-gray-400">$10.20</p>
        </div>
      </div>
      <div class="flex items-center gap-2 bg-red-100 text-red-700 w-fit px-3 py-1 rounded-full text-sm font-bold">
        <span>▲ 22.5%</span>
        <span class="text-red-600 font-normal text-xs">Increase (Negative)</span>
      </div>
       <!-- Visual Bar -->
      <div class="mt-6 flex gap-1 h-3 rounded-full overflow-hidden bg-gray-200 relative">
         <div class="bg-gray-400 w-[80%] h-full"></div>
         <div class="bg-red-500 w-[20%] h-full"></div>
      </div>
    </div>
  </div>

  <!-- Side by Side Chart -->
  <div class="border-t border-gray-200 pt-8">
    <h3 class="text-gray-800 font-bold mb-6">Monthly Revenue Comparison</h3>
    <div class="flex items-end justify-between h-48 gap-4 px-2">
      <!-- Jan -->
      <div class="w-full flex gap-1 items-end h-full">
        <div class="w-1/2 bg-gray-300 rounded-t h-[40%] group relative"><div class="hidden group-hover:block absolute bottom-full left-0 bg-black text-white text-xs p-1 rounded mb-1">$40k</div></div>
        <div class="w-1/2 bg-blue-600 rounded-t h-[50%] group relative"><div class="hidden group-hover:block absolute bottom-full left-0 bg-black text-white text-xs p-1 rounded mb-1">$50k</div></div>
      </div>
      <!-- Feb -->
      <div class="w-full flex gap-1 items-end h-full">
        <div class="w-1/2 bg-gray-300 rounded-t h-[45%]"></div>
        <div class="w-1/2 bg-blue-600 rounded-t h-[60%]"></div>
      </div>
      <!-- Mar -->
      <div class="w-full flex gap-1 items-end h-full">
        <div class="w-1/2 bg-gray-300 rounded-t h-[50%]"></div>
        <div class="w-1/2 bg-blue-600 rounded-t h-[75%]"></div>
      </div>
      <!-- Apr -->
      <div class="w-full flex gap-1 items-end h-full">
        <div class="w-1/2 bg-gray-300 rounded-t h-[55%]"></div>
        <div class="w-1/2 bg-blue-600 rounded-t h-[65%]"></div>
      </div>
      <!-- May -->
      <div class="w-full flex gap-1 items-end h-full">
        <div class="w-1/2 bg-gray-300 rounded-t h-[60%]"></div>
        <div class="w-1/2 bg-blue-600 rounded-t h-[85%]"></div>
      </div>
      <!-- Jun -->
      <div class="w-full flex gap-1 items-end h-full">
        <div class="w-1/2 bg-gray-300 rounded-t h-[65%]"></div>
        <div class="w-1/2 bg-blue-600 rounded-t h-[90%]"></div>
      </div>
    </div>
    <div class="flex items-center gap-6 justify-center mt-6 text-sm">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 bg-gray-300 rounded-sm"></span>
        <span class="text-gray-600">Last Year</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 bg-blue-600 rounded-sm"></span>
        <span class="text-gray-900 font-bold">This Year</span>
      </div>
    </div>
  </div>
</div>`;