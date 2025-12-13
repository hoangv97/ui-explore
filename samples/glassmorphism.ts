export const GLASSMORPHISM_SAMPLE = `<div class="relative w-full max-w-md mx-auto p-8 overflow-hidden rounded-2xl">
  <!-- Decorative Background Blobs (Part of the aesthetic) -->
  <div class="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  <div class="absolute top-20 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

  <!-- Glass Card -->
  <div class="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-xl">
    <h2 class="text-3xl font-bold text-white mb-2">Explore</h2>
    <p class="text-blue-100 mb-6 text-sm">Discover the translucent world.</p>

    <div class="space-y-4">
      <div class="flex items-center space-x-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
        <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">1</div>
        <div class="flex-1">
          <h4 class="text-white font-medium text-sm">Dashboard Analytics</h4>
          <p class="text-xs text-blue-200">View real-time data</p>
        </div>
      </div>
      
      <div class="flex items-center space-x-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
         <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">2</div>
         <div class="flex-1">
          <h4 class="text-white font-medium text-sm">User Settings</h4>
          <p class="text-xs text-blue-200">Manage preferences</p>
        </div>
      </div>
    </div>
    
    <button class="mt-8 w-full py-2 bg-gradient-to-r from-blue-500/50 to-purple-500/50 hover:from-blue-500/70 hover:to-purple-500/70 border border-white/30 rounded-lg text-white font-medium shadow-lg backdrop-blur-sm transition-all">
      Proceed
    </button>
  </div>
</div>`;