export const INTERACTIVE_DEMO_SAMPLE = `<div class="w-full max-w-4xl mx-auto bg-gray-900 p-1 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
  <!-- Fake Browser Toolbar -->
  <div class="bg-gray-800 px-4 py-2 flex items-center gap-4 border-b border-gray-700">
    <div class="flex gap-1.5">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <div class="flex-1 bg-gray-900 rounded-md py-1 px-3 text-xs text-gray-400 text-center font-mono">
      app.product.com/dashboard
    </div>
  </div>

  <!-- Interactive Area -->
  <div class="bg-gray-900 p-8 grid grid-cols-4 gap-6 h-[400px]">
    
    <!-- Sidebar -->
    <div class="col-span-1 bg-gray-800/50 rounded-lg p-4 space-y-2">
      <div class="h-8 bg-gray-700/50 rounded hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors flex items-center px-3 text-gray-400 text-sm font-medium">Dashboard</div>
      <div class="h-8 bg-gray-700/50 rounded hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors flex items-center px-3 text-gray-400 text-sm font-medium">Projects</div>
      <div class="h-8 bg-gray-700/50 rounded hover:bg-blue-600/20 hover:text-blue-400 cursor-pointer transition-colors flex items-center px-3 text-gray-400 text-sm font-medium">Settings</div>
    </div>

    <!-- Main Board -->
    <div class="col-span-3 space-y-6">
      <div class="flex justify-between items-center">
        <div class="h-8 w-32 bg-gray-700 rounded"></div>
        <div class="h-8 w-8 rounded-full bg-blue-500 hover:scale-110 cursor-pointer transition-transform shadow-lg shadow-blue-500/50 flex items-center justify-center text-white font-bold">+</div>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <!-- Draggable Card 1 -->
        <div class="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-500 hover:translate-y-[-2px] hover:shadow-xl transition-all cursor-grab active:cursor-grabbing group">
          <div class="flex justify-between mb-3">
             <div class="w-8 h-2 bg-blue-500/30 rounded-full"></div>
             <div class="opacity-0 group-hover:opacity-100 text-gray-400 text-xs">...</div>
          </div>
          <div class="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
          <div class="h-3 bg-gray-700 rounded w-1/2"></div>
        </div>

        <!-- Draggable Card 2 -->
        <div class="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-500 hover:translate-y-[-2px] hover:shadow-xl transition-all cursor-grab active:cursor-grabbing group">
          <div class="flex justify-between mb-3">
             <div class="w-8 h-2 bg-purple-500/30 rounded-full"></div>
             <div class="opacity-0 group-hover:opacity-100 text-gray-400 text-xs">...</div>
          </div>
          <div class="h-4 bg-gray-600 rounded w-2/3 mb-2"></div>
          <div class="h-3 bg-gray-700 rounded w-full"></div>
        </div>

        <!-- Draggable Card 3 -->
        <div class="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-500 hover:translate-y-[-2px] hover:shadow-xl transition-all cursor-grab active:cursor-grabbing group">
          <div class="flex justify-between mb-3">
             <div class="w-8 h-2 bg-green-500/30 rounded-full"></div>
             <div class="opacity-0 group-hover:opacity-100 text-gray-400 text-xs">...</div>
          </div>
          <div class="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
          <div class="h-3 bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
      
      <!-- Interactive Tooltip Area -->
      <div class="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg flex items-start gap-3">
         <div class="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5">i</div>
         <div>
           <h4 class="text-blue-400 text-sm font-bold mb-1">Try moving a card</h4>
           <p class="text-blue-300/70 text-xs">This is a live preview. Experience the smooth drag-and-drop mechanics.</p>
         </div>
      </div>
    </div>
  </div>
</div>`;