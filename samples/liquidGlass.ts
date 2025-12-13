export const LIQUID_GLASS_SAMPLE = `<div class="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center overflow-hidden bg-white rounded-3xl shadow-xl">
  <!-- Moving Blobs -->
  <div class="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-r from-yellow-300 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
  <div class="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-gradient-to-r from-blue-300 to-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
  <div class="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

  <!-- Glass Card Overlay -->
  <div class="relative z-10 w-4/5 p-6 bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] flex flex-col items-center text-center">
     <div class="w-16 h-16 bg-gradient-to-tr from-white/40 to-white/10 rounded-full mb-4 border border-white/50 shadow-inner flex items-center justify-center">
       <span class="text-2xl">💧</span>
     </div>
     
     <h2 class="text-2xl font-bold text-gray-800 mb-2 mix-blend-overlay">Fluid UI</h2>
     <p class="text-gray-600 mb-6 text-sm font-medium">Morphing gradients and organic blurs creating a surreal feel.</p>
     
     <button class="px-6 py-2 rounded-full bg-white/30 border border-white/40 text-gray-800 font-semibold hover:bg-white/50 transition-all shadow-lg backdrop-blur-md">
       Experience
     </button>
  </div>
</div>
<style>
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
</style>`;