export const DIMENSIONAL_LAYERING_SAMPLE = `<div class="w-full max-w-md mx-auto p-12 bg-[#F0F2F5] min-h-[400px] flex items-center justify-center perspective-1000">
  <div class="relative w-64 h-80 preserve-3d group cursor-pointer">
    
    <!-- Bottom Layer (Base) -->
    <div class="absolute inset-0 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform transition-transform duration-500 ease-out group-hover:translate-z-[-20px] group-hover:scale-90 border border-gray-100"></div>
    
    <!-- Middle Layer (Content) -->
    <div class="absolute inset-0 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] transform transition-transform duration-500 ease-out group-hover:translate-y-[-10px] group-hover:translate-z-[10px] flex flex-col overflow-hidden">
       <div class="h-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex items-center justify-center">
          <div class="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-2xl">🧊</div>
       </div>
       <div class="p-6">
          <h3 class="font-bold text-gray-900 text-lg mb-2">Layered Card</h3>
          <p class="text-gray-500 text-sm">Hover to reveal the spatial hierarchy and depth.</p>
       </div>
    </div>

    <!-- Top Layer (Floating Action/Badge) -->
    <div class="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] flex items-center justify-center text-white font-bold transform transition-transform duration-500 ease-out group-hover:translate-x-[10px] group-hover:translate-y-[-10px] group-hover:translate-z-[40px] z-20">
       +
    </div>

    <!-- Floating Label -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-lg transform transition-transform duration-500 ease-out opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-z-[60px] z-30 whitespace-nowrap">
       View Details
    </div>
  </div>
</div>

<style>
.perspective-1000 { perspective: 1000px; }
.preserve-3d { transform-style: preserve-3d; }
.translate-z-\[-20px\] { transform: translateZ(-20px); }
.translate-z-\[10px\] { transform: translateZ(10px); }
.translate-z-\[40px\] { transform: translateZ(40px); }
.translate-z-\[60px\] { transform: translateZ(60px); }
</style>`;