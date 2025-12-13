export const INCLUSIVE_DESIGN_SAMPLE = `<div class="w-full max-w-lg mx-auto bg-white border-2 border-gray-900 p-6 rounded-lg">
  <h2 class="text-3xl font-bold text-gray-900 mb-6 underline decoration-4 decoration-yellow-400 underline-offset-4">System Status</h2>
  
  <div class="space-y-4">
    <!-- Success State -->
    <div class="p-4 bg-green-50 border-l-8 border-green-700 flex items-start gap-4">
      <div class="bg-green-700 text-white p-1 rounded-full shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-bold text-gray-900 flex items-center gap-2">
          Operational
          <span class="text-xs bg-green-200 text-green-900 px-2 py-1 rounded border border-green-800 font-mono">CODE:200</span>
        </h3>
        <p class="text-gray-800 font-medium">All systems are functioning normally.</p>
      </div>
    </div>

    <!-- Error State -->
    <div class="p-4 bg-red-50 border-l-8 border-red-700 flex items-start gap-4 pattern-diagonal-lines-sm">
      <div class="bg-red-700 text-white p-1 rounded-full shrink-0">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-bold text-gray-900 flex items-center gap-2">
          Connection Error
          <span class="text-xs bg-red-200 text-red-900 px-2 py-1 rounded border border-red-800 font-mono">CODE:503</span>
        </h3>
        <p class="text-gray-800 font-medium">Unable to connect to the database server.</p>
        <button class="mt-3 bg-white border-2 border-gray-900 text-gray-900 px-4 py-2 font-bold hover:bg-gray-100 focus:ring-4 focus:ring-yellow-400 focus:outline-none rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all">
          Retry Connection
        </button>
      </div>
    </div>
  </div>
  
  <p class="mt-6 text-sm text-gray-700">
    * Patterns and icons are used alongside color to convey state.
  </p>
</div>`;