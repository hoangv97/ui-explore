export const MICRO_INTERACTIONS_SAMPLE = `<div class="w-full max-w-md mx-auto p-8 bg-gray-50 rounded-2xl flex flex-col gap-8 items-center justify-center">
  <!-- Like Button Interaction -->
  <div class="group relative">
    <button class="relative z-10 p-4 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 active:scale-90 transition-all duration-200 ease-spring">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 group-hover:text-red-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
    <!-- Burst effect simulation -->
    <div class="absolute inset-0 rounded-full bg-red-100 scale-0 opacity-0 group-active:scale-150 group-active:opacity-100 transition-all duration-300"></div>
  </div>

  <!-- Toggle Switch -->
  <label class="flex items-center cursor-pointer group">
    <div class="relative">
      <input type="checkbox" class="sr-only peer" />
      <div class="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-blue-600 after:shadow-sm"></div>
    </div>
    <span class="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Notifications</span>
  </label>

  <!-- Upload Button with State -->
  <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 overflow-hidden relative group active:bg-blue-800 transition-colors">
    <span class="group-hover:-translate-y-10 transition-transform duration-300 absolute">Upload File</span>
    <span class="translate-y-10 group-hover:translate-y-0 transition-transform duration-300 absolute flex items-center gap-2">
      <svg class="animate-bounce w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
      Click to Upload
    </span>
    <span class="opacity-0">Placeholder</span> <!-- Maintains width -->
  </button>
</div>`;