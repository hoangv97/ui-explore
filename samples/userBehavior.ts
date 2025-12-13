export const USER_BEHAVIOR_SAMPLE = `<div class="w-full max-w-4xl mx-auto bg-white p-8 rounded-xl shadow border border-gray-200">
  <h2 class="text-xl font-bold text-gray-800 mb-8">Checkout Funnel Analysis</h2>

  <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 relative">
    <!-- Connecting Line (Desktop) -->
    <div class="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

    <!-- Step 1 -->
    <div class="w-full md:w-48 bg-white p-4 rounded-lg border border-blue-100 shadow-sm text-center relative z-10">
      <div class="w-10 h-10 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold mb-3 border border-blue-100">1</div>
      <h3 class="font-bold text-gray-900 mb-1">Cart View</h3>
      <p class="text-2xl font-extrabold text-gray-800">12,500</p>
      <div class="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
        <div class="h-full bg-blue-500 w-full"></div>
      </div>
    </div>

    <!-- Dropoff 1 -->
    <div class="md:absolute left-[20%] top-[60%] text-center transform md:-translate-x-1/2 md:translate-y-4">
      <span class="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">↓ 45% Dropoff</span>
    </div>

    <!-- Step 2 -->
    <div class="w-full md:w-48 bg-white p-4 rounded-lg border border-blue-100 shadow-sm text-center relative z-10">
      <div class="w-10 h-10 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold mb-3 border border-blue-100">2</div>
      <h3 class="font-bold text-gray-900 mb-1">Shipping Info</h3>
      <p class="text-2xl font-extrabold text-gray-800">6,875</p>
      <div class="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
        <div class="h-full bg-blue-500 w-[55%]"></div>
      </div>
    </div>

    <!-- Dropoff 2 -->
    <div class="md:absolute left-[50%] top-[60%] text-center transform md:-translate-x-1/2 md:translate-y-4">
      <span class="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">↓ 20% Dropoff</span>
    </div>

    <!-- Step 3 -->
    <div class="w-full md:w-48 bg-white p-4 rounded-lg border border-blue-100 shadow-sm text-center relative z-10">
      <div class="w-10 h-10 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold mb-3 border border-blue-100">3</div>
      <h3 class="font-bold text-gray-900 mb-1">Payment</h3>
      <p class="text-2xl font-extrabold text-gray-800">5,500</p>
      <div class="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
        <div class="h-full bg-blue-500 w-[44%]"></div>
      </div>
    </div>

    <!-- Dropoff 3 -->
    <div class="md:absolute left-[80%] top-[60%] text-center transform md:-translate-x-1/2 md:translate-y-4">
      <span class="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">↓ 5% Dropoff</span>
    </div>

    <!-- Step 4 -->
    <div class="w-full md:w-48 bg-green-50 p-4 rounded-lg border border-green-200 shadow-sm text-center relative z-10">
      <div class="w-10 h-10 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold mb-3 border border-green-200">✓</div>
      <h3 class="font-bold text-gray-900 mb-1">Purchased</h3>
      <p class="text-2xl font-extrabold text-green-700">5,225</p>
      <div class="w-full bg-gray-200 h-1.5 rounded-full mt-3 overflow-hidden">
        <div class="h-full bg-green-500 w-[41%]"></div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
    <div>
      <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase">Top Dropoff Reason</h4>
      <div class="space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-gray-600">Unexpected Shipping Cost</span>
          <span class="font-mono font-bold text-red-600">42%</span>
        </div>
        <div class="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div class="bg-red-400 h-full w-[42%]"></div>
        </div>
      </div>
    </div>
    <div>
      <h4 class="font-bold text-gray-900 mb-3 text-sm uppercase">Conversion Rate</h4>
      <div class="flex items-end gap-3">
        <span class="text-4xl font-extrabold text-gray-900">41.8%</span>
        <span class="text-sm font-bold text-green-600 mb-1.5">↑ 2.1%</span>
      </div>
      <p class="text-xs text-gray-500 mt-1">Overall visitor to purchase ratio</p>
    </div>
  </div>
</div>`;