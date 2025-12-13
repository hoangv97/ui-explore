export const HERO_CENTRIC_SAMPLE = `<div class="w-full bg-white overflow-hidden">
  <div class="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
    
    <!-- Text Content -->
    <div class="flex-1 text-center md:text-left">
      <span class="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide mb-6">
        New Release v2.0
      </span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
        Build faster with <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Focus.</span>
      </h1>
      <p class="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
        The all-in-one platform for rapid prototyping. Stop wrestling with code and start shipping products.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <button class="px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/20 transition-all transform hover:-translate-y-1">
          Get Started
        </button>
        <button class="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Watch Demo
        </button>
      </div>
      
      <p class="mt-6 text-xs text-gray-400">No credit card required · 14-day free trial</p>
    </div>

    <!-- Hero Visual -->
    <div class="flex-1 w-full max-w-md md:max-w-none relative">
      <div class="absolute -top-12 -right-12 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div class="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
         <div class="bg-gray-50 border-b border-gray-100 p-3 flex gap-1.5">
           <div class="w-3 h-3 rounded-full bg-red-400"></div>
           <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
           <div class="w-3 h-3 rounded-full bg-green-400"></div>
         </div>
         <div class="p-6 space-y-4">
           <div class="h-4 bg-gray-100 rounded w-3/4"></div>
           <div class="h-32 bg-indigo-50 rounded-lg border-2 border-dashed border-indigo-100 flex items-center justify-center text-indigo-300">
             Dashboard Preview
           </div>
           <div class="grid grid-cols-3 gap-2">
             <div class="h-8 bg-gray-100 rounded"></div>
             <div class="h-8 bg-gray-100 rounded"></div>
             <div class="h-8 bg-gray-100 rounded"></div>
           </div>
         </div>
      </div>
    </div>
  </div>
</div>`;