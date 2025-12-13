export const FINANCIAL_DASHBOARD_SAMPLE = `<div class="w-full max-w-5xl mx-auto bg-white border border-gray-300 shadow-sm font-sans">
  <!-- Top Bar -->
  <div class="bg-gray-100 border-b border-gray-300 px-6 py-4 flex justify-between items-center">
    <div class="flex items-center gap-3">
      <div class="bg-blue-800 text-white font-bold p-1.5 rounded text-xs">FIN</div>
      <h1 class="text-lg font-bold text-gray-800">Consolidated Balance Sheet</h1>
    </div>
    <div class="text-sm text-gray-600 font-medium">Period: <span class="text-black">Oct 2023</span></div>
  </div>

  <div class="p-6">
    <!-- Big Numbers -->
    <div class="grid grid-cols-3 gap-6 mb-8">
      <div class="border border-gray-200 rounded p-4">
        <p class="text-xs text-gray-500 font-bold uppercase mb-1">Total Assets</p>
        <p class="text-2xl font-mono font-bold text-gray-900">$2,450,000.00</p>
        <p class="text-xs text-green-600 mt-1 font-medium">▲ 5.2% vs prev month</p>
      </div>
      <div class="border border-gray-200 rounded p-4">
        <p class="text-xs text-gray-500 font-bold uppercase mb-1">Total Liabilities</p>
        <p class="text-2xl font-mono font-bold text-gray-900">$850,000.00</p>
        <p class="text-xs text-red-600 mt-1 font-medium">▼ 1.2% (Improved)</p>
      </div>
      <div class="border border-gray-200 rounded p-4 bg-gray-50">
        <p class="text-xs text-gray-500 font-bold uppercase mb-1">Net Equity</p>
        <p class="text-2xl font-mono font-bold text-blue-900">$1,600,000.00</p>
        <p class="text-xs text-blue-600 mt-1 font-medium">Solid Growth</p>
      </div>
    </div>

    <!-- Financial Table -->
    <div class="overflow-hidden border border-gray-300 rounded">
      <table class="w-full text-sm text-left">
        <thead class="bg-gray-50 text-gray-600 font-bold border-b border-gray-300">
          <tr>
            <th class="px-4 py-3">Account</th>
            <th class="px-4 py-3 text-right">Debit</th>
            <th class="px-4 py-3 text-right">Credit</th>
            <th class="px-4 py-3 text-right">Balance</th>
            <th class="px-4 py-3 text-center">Trend</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr class="hover:bg-blue-50">
            <td class="px-4 py-3 font-medium text-gray-800">1000 - Cash & Equivalents</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">$120,000</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">-</td>
            <td class="px-4 py-3 text-right font-mono font-bold text-gray-900">$450,200</td>
            <td class="px-4 py-3 text-center text-green-500 text-xs">▲</td>
          </tr>
          <tr class="hover:bg-blue-50">
            <td class="px-4 py-3 font-medium text-gray-800">1100 - Accounts Receivable</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">$45,000</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">$12,000</td>
            <td class="px-4 py-3 text-right font-mono font-bold text-gray-900">$128,500</td>
            <td class="px-4 py-3 text-center text-gray-400 text-xs">-</td>
          </tr>
          <tr class="hover:bg-blue-50">
            <td class="px-4 py-3 font-medium text-gray-800">2000 - Accounts Payable</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">$22,000</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">$35,000</td>
            <td class="px-4 py-3 text-right font-mono font-bold text-gray-900">($42,300)</td>
            <td class="px-4 py-3 text-center text-red-500 text-xs">▼</td>
          </tr>
          <tr class="hover:bg-blue-50 bg-gray-50/50">
            <td class="px-4 py-3 font-medium text-gray-800">4000 - Revenue (Sales)</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">-</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">$210,000</td>
            <td class="px-4 py-3 text-right font-mono font-bold text-green-700">$210,000</td>
            <td class="px-4 py-3 text-center text-green-500 text-xs">▲</td>
          </tr>
          <tr class="hover:bg-blue-50 bg-gray-50/50">
            <td class="px-4 py-3 font-medium text-gray-800">5000 - Expenses (Ops)</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">$85,000</td>
            <td class="px-4 py-3 text-right font-mono text-gray-600">-</td>
            <td class="px-4 py-3 text-right font-mono font-bold text-red-700">($85,000)</td>
            <td class="px-4 py-3 text-center text-red-500 text-xs">▲</td>
          </tr>
        </tbody>
        <tfoot class="bg-gray-100 font-bold border-t border-gray-300">
          <tr>
            <td class="px-4 py-3 text-gray-900">NET TOTAL</td>
            <td class="px-4 py-3 text-right font-mono">-</td>
            <td class="px-4 py-3 text-right font-mono">-</td>
            <td class="px-4 py-3 text-right font-mono text-blue-900">$125,000</td>
            <td class="px-4 py-3"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</div>`;