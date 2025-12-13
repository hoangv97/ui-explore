export const EXECUTIVE_DASHBOARD_SAMPLE = `<div class="w-full max-w-5xl mx-auto bg-gray-50 p-8 rounded-xl">
  <!-- Header -->
  <div class="flex justify-between items-end mb-8">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Executive Overview</h1>
      <p class="text-sm text-gray-500">Q3 Performance Report · Updated 10 mins ago</p>
    </div>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Export PDF</button>
      <button class="px-4 py-2 bg-blue-900 text-white rounded text-sm font-medium shadow-sm hover:bg-blue-800">Share Report</button>
    </div>
  </div>

  <!-- Key Metrics Row -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
    <!-- Metric 1 -->
    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Total Revenue</p>
      <div class="flex items-baseline gap-2">
        <span class="text-3xl font-extrabold text-gray-900">$4.2M</span>
        <span class="inline-flex items-center text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
          +12.5%
        </span>
      </div>
      <div class="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div class="h-full bg-blue-900 w-[75%]"></div>
      </div>
      <p class="text-xs text-gray-400 mt-2">75% of quarterly goal</p>
    </div>

    <!-- Metric 2 -->
    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Net Profit Margin</p>
      <div class="flex items-baseline gap-2">
        <span class="text-3xl font-extrabold text-gray-900">24%</span>
        <span class="inline-flex items-center text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
          -2.1%
        </span>
      </div>
      <div class="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div class="h-full bg-yellow-500 w-[24%]"></div>
      </div>
      <p class="text-xs text-gray-400 mt-2">Requires attention</p>
    </div>

    <!-- Metric 3 -->
    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Active Customers</p>
      <div class="flex items-baseline gap-2">
        <span class="text-3xl font-extrabold text-gray-900">1,240</span>
        <span class="inline-flex items-center text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
          +5.3%
        </span>
      </div>
      <div class="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div class="h-full bg-blue-500 w-[90%]"></div>
      </div>
      <p class="text-xs text-gray-400 mt-2">Highest ever</p>
    </div>

    <!-- Metric 4 -->
    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Churn Rate</p>
      <div class="flex items-baseline gap-2">
        <span class="text-3xl font-extrabold text-gray-900">2.1%</span>
        <span class="inline-flex items-center text-xs font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
          0.0%
        </span>
      </div>
      <div class="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <div class="h-full bg-purple-500 w-[15%]"></div>
      </div>
      <p class="text-xs text-gray-400 mt-2">Within healthy range</p>
    </div>
  </div>

  <!-- Content Grid -->
  <div class="grid grid-cols-3 gap-6">
    <div class="col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[300px]">
      <h3 class="font-bold text-gray-900 mb-6">Revenue Trend (YTD)</h3>
      <div class="flex items-end justify-between h-48 gap-4 px-4 border-b border-gray-200 pb-4">
         <div class="w-full bg-blue-100 rounded-t h-[40%] relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$1.2M</div></div>
         <div class="w-full bg-blue-200 rounded-t h-[55%] relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$1.5M</div></div>
         <div class="w-full bg-blue-300 rounded-t h-[45%] relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$1.3M</div></div>
         <div class="w-full bg-blue-400 rounded-t h-[70%] relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$2.1M</div></div>
         <div class="w-full bg-blue-500 rounded-t h-[60%] relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$1.8M</div></div>
         <div class="w-full bg-blue-600 rounded-t h-[85%] relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$2.5M</div></div>
         <div class="w-full bg-blue-900 rounded-t h-[95%] relative group"><div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">$4.2M</div></div>
      </div>
      <div class="flex justify-between mt-2 text-xs text-gray-500 px-2 font-mono">
        <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 class="font-bold text-gray-900 mb-6">Market Share</h3>
      <div class="flex justify-center mb-8 relative">
         <div class="w-40 h-40 rounded-full border-[16px] border-blue-900 border-r-gray-200 border-b-gray-200 rotate-45 transform"></div>
         <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
           <span class="block text-2xl font-bold text-gray-900">65%</span>
           <span class="text-xs text-gray-500">Dominance</span>
         </div>
      </div>
      <div class="space-y-3">
        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-blue-900"></div>
            <span class="text-gray-600">Our Company</span>
          </div>
          <span class="font-bold text-gray-900">65%</span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-gray-300"></div>
            <span class="text-gray-600">Competitor A</span>
          </div>
          <span class="font-bold text-gray-900">20%</span>
        </div>
        <div class="flex items-center justify-between text-sm">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-gray-100"></div>
            <span class="text-gray-600">Others</span>
          </div>
          <span class="font-bold text-gray-900">15%</span>
        </div>
      </div>
    </div>
  </div>
</div>`;