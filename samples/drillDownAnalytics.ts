export const DRILL_DOWN_ANALYTICS_SAMPLE = `<div class="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
  <!-- Breadcrumb Navigation -->
  <div class="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center text-sm font-medium">
    <span class="text-blue-600 hover:underline cursor-pointer">Global Sales</span>
    <svg class="w-4 h-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
    <span class="text-blue-600 hover:underline cursor-pointer">North America</span>
    <svg class="w-4 h-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
    <span class="text-gray-900">Electronics</span>
  </div>

  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-bold text-gray-800">Category Performance: Electronics</h2>
      <button class="text-blue-600 text-sm font-medium hover:bg-blue-50 px-3 py-1 rounded transition-colors">
        &larr; Up one level
      </button>
    </div>

    <!-- Drill Down Table -->
    <div class="border border-gray-200 rounded-lg overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
          <tr>
            <th class="px-6 py-3 font-semibold">Sub-Category</th>
            <th class="px-6 py-3 font-semibold text-right">Revenue</th>
            <th class="px-6 py-3 font-semibold text-right">Growth</th>
            <th class="px-6 py-3 font-semibold text-right">% of Parent</th>
            <th class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 text-sm">
          <tr class="group hover:bg-blue-50 transition-colors cursor-pointer">
            <td class="px-6 py-4 font-medium text-gray-900 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              Smartphones
            </td>
            <td class="px-6 py-4 text-right text-gray-700 font-mono">$4.2M</td>
            <td class="px-6 py-4 text-right text-green-600 font-bold">↑ 12%</td>
            <td class="px-6 py-4 text-right">
               <div class="flex items-center justify-end gap-2">
                 <span class="text-xs text-gray-500">45%</span>
                 <div class="w-16 h-1.5 bg-gray-200 rounded-full"><div class="h-full bg-blue-500 w-[45%] rounded-full"></div></div>
               </div>
            </td>
            <td class="px-6 py-4 text-center">
               <button class="text-blue-600 hover:text-blue-800 font-bold text-xs border border-blue-200 px-2 py-1 rounded bg-white group-hover:bg-blue-100">DRILL &rarr;</button>
            </td>
          </tr>

          <tr class="group hover:bg-blue-50 transition-colors cursor-pointer">
            <td class="px-6 py-4 font-medium text-gray-900 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-purple-500"></span>
              Laptops
            </td>
            <td class="px-6 py-4 text-right text-gray-700 font-mono">$3.1M</td>
            <td class="px-6 py-4 text-right text-green-600 font-bold">↑ 8%</td>
            <td class="px-6 py-4 text-right">
               <div class="flex items-center justify-end gap-2">
                 <span class="text-xs text-gray-500">32%</span>
                 <div class="w-16 h-1.5 bg-gray-200 rounded-full"><div class="h-full bg-purple-500 w-[32%] rounded-full"></div></div>
               </div>
            </td>
            <td class="px-6 py-4 text-center">
               <button class="text-blue-600 hover:text-blue-800 font-bold text-xs border border-blue-200 px-2 py-1 rounded bg-white group-hover:bg-blue-100">DRILL &rarr;</button>
            </td>
          </tr>

          <tr class="group hover:bg-blue-50 transition-colors cursor-pointer">
            <td class="px-6 py-4 font-medium text-gray-900 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-orange-500"></span>
              Accessories
            </td>
            <td class="px-6 py-4 text-right text-gray-700 font-mono">$1.8M</td>
            <td class="px-6 py-4 text-right text-red-500 font-bold">↓ 2%</td>
            <td class="px-6 py-4 text-right">
               <div class="flex items-center justify-end gap-2">
                 <span class="text-xs text-gray-500">23%</span>
                 <div class="w-16 h-1.5 bg-gray-200 rounded-full"><div class="h-full bg-orange-500 w-[23%] rounded-full"></div></div>
               </div>
            </td>
            <td class="px-6 py-4 text-center">
               <button class="text-blue-600 hover:text-blue-800 font-bold text-xs border border-blue-200 px-2 py-1 rounded bg-white group-hover:bg-blue-100">DRILL &rarr;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Contextual Details Panel -->
    <div class="mt-6 bg-blue-50 p-4 rounded border border-blue-100 flex items-start gap-4">
       <div class="bg-blue-100 p-2 rounded text-blue-600">
         <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
       </div>
       <div>
         <h4 class="font-bold text-blue-900 text-sm">Analysis Insight</h4>
         <p class="text-sm text-blue-800 mt-1">
           <strong>Smartphones</strong> are driving growth in North America, primarily attributed to the new Model X launch in Q3. Click to view breakdown by model.
         </p>
       </div>
    </div>
  </div>
</div>`;