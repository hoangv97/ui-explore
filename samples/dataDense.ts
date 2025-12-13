export const DATA_DENSE_SAMPLE = `<div class="w-full bg-gray-100 p-4 font-sans text-xs">
  <div class="grid grid-cols-4 gap-3 mb-3">
    <!-- Compact Stats -->
    <div class="bg-white p-3 border border-gray-300 shadow-sm rounded">
      <div class="text-gray-500 uppercase tracking-tight font-semibold mb-1" style="font-size: 10px;">Total Revenue</div>
      <div class="flex justify-between items-end">
         <span class="text-lg font-bold text-gray-800">$1.2M</span>
         <span class="text-green-600 font-bold">+12%</span>
      </div>
    </div>
    <div class="bg-white p-3 border border-gray-300 shadow-sm rounded">
      <div class="text-gray-500 uppercase tracking-tight font-semibold mb-1" style="font-size: 10px;">Orders</div>
      <div class="flex justify-between items-end">
         <span class="text-lg font-bold text-gray-800">8,542</span>
         <span class="text-red-500 font-bold">-3%</span>
      </div>
    </div>
    <div class="bg-white p-3 border border-gray-300 shadow-sm rounded">
      <div class="text-gray-500 uppercase tracking-tight font-semibold mb-1" style="font-size: 10px;">Avg. Value</div>
      <div class="flex justify-between items-end">
         <span class="text-lg font-bold text-gray-800">$142</span>
         <span class="text-gray-400 font-bold">0%</span>
      </div>
    </div>
    <div class="bg-white p-3 border border-gray-300 shadow-sm rounded">
      <div class="text-gray-500 uppercase tracking-tight font-semibold mb-1" style="font-size: 10px;">Pending</div>
      <div class="flex justify-between items-end">
         <span class="text-lg font-bold text-amber-600">42</span>
         <span class="text-amber-600 text-[10px]">Action Req.</span>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-3">
    <!-- Data Table -->
    <div class="col-span-2 bg-white border border-gray-300 shadow-sm rounded overflow-hidden">
      <div class="bg-gray-50 px-3 py-2 border-b border-gray-200 font-bold text-gray-700 flex justify-between">
        <span>Recent Transactions</span>
        <button class="text-blue-600 hover:underline">Export</button>
      </div>
      <table class="w-full text-left">
        <thead class="bg-gray-50 border-b border-gray-200 text-gray-500">
          <tr>
            <th class="px-3 py-2 font-medium">ID</th>
            <th class="px-3 py-2 font-medium">Client</th>
            <th class="px-3 py-2 font-medium">Date</th>
            <th class="px-3 py-2 font-medium text-right">Amount</th>
            <th class="px-3 py-2 font-medium text-center">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr class="hover:bg-blue-50 cursor-pointer">
            <td class="px-3 py-1.5 font-mono text-gray-600">#TR-8821</td>
            <td class="px-3 py-1.5 font-medium">Acme Corp</td>
            <td class="px-3 py-1.5 text-gray-500">Oct 24</td>
            <td class="px-3 py-1.5 text-right font-mono">$4,200</td>
            <td class="px-3 py-1.5 text-center"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded-[3px] text-[10px] font-bold">PAID</span></td>
          </tr>
          <tr class="hover:bg-blue-50 cursor-pointer">
            <td class="px-3 py-1.5 font-mono text-gray-600">#TR-8822</td>
            <td class="px-3 py-1.5 font-medium">Globex Inc</td>
            <td class="px-3 py-1.5 text-gray-500">Oct 24</td>
            <td class="px-3 py-1.5 text-right font-mono">$1,150</td>
            <td class="px-3 py-1.5 text-center"><span class="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-[3px] text-[10px] font-bold">PENDING</span></td>
          </tr>
           <tr class="hover:bg-blue-50 cursor-pointer">
            <td class="px-3 py-1.5 font-mono text-gray-600">#TR-8823</td>
            <td class="px-3 py-1.5 font-medium">Soylent</td>
            <td class="px-3 py-1.5 text-gray-500">Oct 23</td>
            <td class="px-3 py-1.5 text-right font-mono">$850</td>
            <td class="px-3 py-1.5 text-center"><span class="bg-green-100 text-green-700 px-1.5 py-0.5 rounded-[3px] text-[10px] font-bold">PAID</span></td>
          </tr>
           <tr class="hover:bg-blue-50 cursor-pointer">
            <td class="px-3 py-1.5 font-mono text-gray-600">#TR-8824</td>
            <td class="px-3 py-1.5 font-medium">Umbrella</td>
            <td class="px-3 py-1.5 text-gray-500">Oct 23</td>
            <td class="px-3 py-1.5 text-right font-mono">$12,000</td>
            <td class="px-3 py-1.5 text-center"><span class="bg-red-100 text-red-700 px-1.5 py-0.5 rounded-[3px] text-[10px] font-bold">FAILED</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mini Charts Side -->
    <div class="bg-white border border-gray-300 shadow-sm rounded p-3 flex flex-col gap-4">
       <div>
         <div class="font-bold text-gray-700 mb-2 flex justify-between">
            Traffic Source 
            <span class="text-gray-400 font-normal">Last 7d</span>
         </div>
         <div class="space-y-1.5">
           <div class="flex items-center text-[10px]">
             <span class="w-12 text-gray-500">Direct</span>
             <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden mx-2">
               <div class="h-full bg-blue-500 w-[65%]"></div>
             </div>
             <span class="font-mono">65%</span>
           </div>
           <div class="flex items-center text-[10px]">
             <span class="w-12 text-gray-500">Social</span>
             <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden mx-2">
               <div class="h-full bg-indigo-500 w-[20%]"></div>
             </div>
             <span class="font-mono">20%</span>
           </div>
           <div class="flex items-center text-[10px]">
             <span class="w-12 text-gray-500">Referral</span>
             <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden mx-2">
               <div class="h-full bg-teal-500 w-[15%]"></div>
             </div>
             <span class="font-mono">15%</span>
           </div>
         </div>
       </div>
       
       <div class="border-t border-gray-100 pt-3">
          <div class="font-bold text-gray-700 mb-2">System Load</div>
          <div class="flex items-end h-12 gap-1 justify-between px-1">
             <div class="w-full bg-green-200 h-[30%]"></div>
             <div class="w-full bg-green-300 h-[50%]"></div>
             <div class="w-full bg-green-400 h-[40%]"></div>
             <div class="w-full bg-green-500 h-[70%]"></div>
             <div class="w-full bg-green-600 h-[60%]"></div>
             <div class="w-full bg-green-500 h-[40%]"></div>
             <div class="w-full bg-green-400 h-[30%]"></div>
          </div>
       </div>
    </div>
  </div>
</div>`;