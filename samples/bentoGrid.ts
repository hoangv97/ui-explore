export const BENTO_GRID_SAMPLE = `<div class="w-full max-w-4xl mx-auto p-4">
  <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 h-auto md:h-[500px]">
    
    <!-- Large Tile -->
    <div class="md:col-span-2 md:row-span-2 bg-gray-50 rounded-[30px] p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm hover:shadow-md cursor-pointer border border-gray-100">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Focus Mode</h2>
        <p class="text-gray-500">Eliminate distractions with a single click.</p>
      </div>
      <div class="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </div>
    </div>

    <!-- Medium Tile 1 -->
    <div class="bg-blue-500 rounded-[30px] p-6 text-white flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm cursor-pointer">
      <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <div>
        <h3 class="font-bold text-lg">Sync</h3>
        <p class="text-blue-100 text-sm">Real-time</p>
      </div>
    </div>

    <!-- Medium Tile 2 -->
    <div class="bg-gray-900 rounded-[30px] p-6 text-white flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm cursor-pointer">
      <h3 class="font-bold text-2xl">Dark<br>Mode</h3>
      <div class="w-full flex justify-end">
         <div class="w-10 h-6 border-2 border-gray-600 rounded-full relative"><div class="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
      </div>
    </div>

    <!-- Wide Tile -->
    <div class="md:col-span-2 bg-purple-50 rounded-[30px] p-6 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm border border-purple-100 cursor-pointer">
       <div>
         <h3 class="font-bold text-xl text-purple-900">Analytics</h3>
         <p class="text-purple-600 text-sm">Track your progress.</p>
       </div>
       <div class="flex items-end gap-1 h-12">
         <div class="w-3 bg-purple-200 h-[40%] rounded-t-sm"></div>
         <div class="w-3 bg-purple-300 h-[60%] rounded-t-sm"></div>
         <div class="w-3 bg-purple-400 h-[30%] rounded-t-sm"></div>
         <div class="w-3 bg-purple-500 h-[80%] rounded-t-sm"></div>
         <div class="w-3 bg-purple-600 h-[50%] rounded-t-sm"></div>
       </div>
    </div>

    <!-- Tall Tile -->
    <div class="md:row-span-2 bg-orange-50 rounded-[30px] p-6 flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-300 shadow-sm border border-orange-100 cursor-pointer">
       <div class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-3xl mb-4">🔥</div>
       <h3 class="font-bold text-xl text-orange-900">Daily<br>Streak</h3>
       <p class="text-4xl font-extrabold text-orange-600 mt-2">12</p>
    </div>

    <!-- Small Tile -->
    <div class="bg-green-50 rounded-[30px] p-6 flex items-center justify-center hover:scale-[1.02] transition-transform duration-300 shadow-sm border border-green-100 cursor-pointer">
       <span class="text-green-700 font-bold">Done ✓</span>
    </div>
  </div>
</div>`;