export const SALES_INTELLIGENCE_SAMPLE = `<div class="w-full max-w-5xl mx-auto bg-slate-50 p-6 rounded-xl">
  <!-- Top Metrics -->
  <div class="grid grid-cols-4 gap-4 mb-6">
    <div class="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
      <div class="text-gray-500 text-xs uppercase font-bold">Pipeline Value</div>
      <div class="text-xl font-bold text-gray-900">$4.2M</div>
    </div>
    <div class="bg-white p-4 rounded shadow-sm border-l-4 border-green-500">
      <div class="text-gray-500 text-xs uppercase font-bold">Closed Won</div>
      <div class="text-xl font-bold text-gray-900">$850k</div>
    </div>
    <div class="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
      <div class="text-gray-500 text-xs uppercase font-bold">Win Rate</div>
      <div class="text-xl font-bold text-gray-900">32%</div>
    </div>
    <div class="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
      <div class="text-gray-500 text-xs uppercase font-bold">Avg Deal Cycle</div>
      <div class="text-xl font-bold text-gray-900">42 Days</div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Pipeline Visual -->
    <div class="col-span-2 bg-white p-6 rounded-lg shadow-sm">
      <h3 class="font-bold text-gray-800 mb-6">Opportunity Pipeline</h3>
      <div class="space-y-6">
        <!-- Stage 1 -->
        <div class="relative">
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium text-gray-700">Discovery (12)</span>
            <span class="font-bold text-gray-900">$1.2M</span>
          </div>
          <div class="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div class="bg-blue-400 h-full w-[90%] rounded-full"></div>
          </div>
        </div>
        <!-- Stage 2 -->
        <div class="relative">
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium text-gray-700">Proposal (8)</span>
            <span class="font-bold text-gray-900">$800k</span>
          </div>
          <div class="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div class="bg-blue-500 h-full w-[60%] rounded-full"></div>
          </div>
        </div>
        <!-- Stage 3 -->
        <div class="relative">
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium text-gray-700">Negotiation (5)</span>
            <span class="font-bold text-gray-900">$1.8M</span>
          </div>
          <div class="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div class="bg-blue-600 h-full w-[75%] rounded-full animate-pulse"></div>
          </div>
        </div>
        <!-- Stage 4 -->
        <div class="relative">
          <div class="flex justify-between text-sm mb-1">
            <span class="font-medium text-gray-700">Closing (3)</span>
            <span class="font-bold text-gray-900">$400k</span>
          </div>
          <div class="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
            <div class="bg-green-500 h-full w-[30%] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leaderboard -->
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="font-bold text-gray-800 mb-4">Top Performers</h3>
      <div class="space-y-4">
        <!-- Rep 1 -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-bold text-xs">1</div>
          <div class="flex-1">
            <div class="flex justify-between text-sm">
              <span class="font-medium text-gray-900">Sarah J.</span>
              <span class="font-bold text-green-600">$142k</span>
            </div>
            <div class="w-full bg-gray-100 h-1.5 mt-1 rounded-full"><div class="bg-green-500 w-[95%] h-full rounded-full"></div></div>
          </div>
        </div>
        <!-- Rep 2 -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-xs">2</div>
          <div class="flex-1">
            <div class="flex justify-between text-sm">
              <span class="font-medium text-gray-900">Mike T.</span>
              <span class="font-bold text-green-600">$110k</span>
            </div>
            <div class="w-full bg-gray-100 h-1.5 mt-1 rounded-full"><div class="bg-green-500 w-[75%] h-full rounded-full"></div></div>
          </div>
        </div>
        <!-- Rep 3 -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-xs">3</div>
          <div class="flex-1">
            <div class="flex justify-between text-sm">
              <span class="font-medium text-gray-900">Jessica L.</span>
              <span class="font-bold text-green-600">$98k</span>
            </div>
            <div class="w-full bg-gray-100 h-1.5 mt-1 rounded-full"><div class="bg-green-500 w-[65%] h-full rounded-full"></div></div>
          </div>
        </div>
      </div>
      
      <button class="w-full mt-6 py-2 border border-gray-200 text-gray-600 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
        View Full Roster
      </button>
    </div>
  </div>
</div>`;