export const MOTION_DRIVEN_SAMPLE = `<div class="w-full max-w-md mx-auto p-8 bg-slate-900 rounded-2xl overflow-hidden group">
  <div class="relative z-10">
    <div class="flex items-center space-x-4 mb-8">
       <div class="w-12 h-12 bg-indigo-500 rounded-xl shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 ease-out flex items-center justify-center">
         <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
       </div>
       <div>
         <h2 class="text-white font-bold text-xl translate-x-0 group-hover:translate-x-2 transition-transform duration-300">Motion UI</h2>
         <p class="text-slate-400 text-sm translate-x-0 group-hover:translate-x-2 transition-transform duration-300 delay-75">Hover to interact</p>
       </div>
    </div>

    <div class="space-y-3">
      <div class="h-16 bg-slate-800 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-slate-700 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-500/30">
        <span class="text-slate-200 font-medium">Item 01</span>
        <div class="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
           →
        </div>
      </div>
      
      <div class="h-16 bg-slate-800 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-slate-700 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 border border-transparent hover:border-indigo-500/30">
        <span class="text-slate-200 font-medium">Item 02</span>
         <div class="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
           →
        </div>
      </div>
    </div>
    
    <button class="mt-8 w-full py-3 bg-indigo-600 text-white rounded-lg font-bold relative overflow-hidden group/btn">
       <span class="relative z-10 group-hover/btn:tracking-widest transition-all duration-300">ACTIVATE</span>
       <div class="absolute inset-0 bg-indigo-500 transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-300 ease-out"></div>
    </button>
  </div>
  
  <!-- Decorative background circle -->
  <div class="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 group-hover:scale-150 transition-all duration-700 ease-in-out"></div>
</div>`;