export const BENTO_GRIDS_NEW_SAMPLE = `<div class="w-full max-w-4xl mx-auto p-6 bg-[#F5F5F7] rounded-[40px]">
  <div class="grid grid-cols-1 md:grid-cols-6 gap-4 h-auto md:h-[600px] grid-rows-[auto]">
    
    <!-- Profile Card (Top Left) -->
    <div class="md:col-span-4 md:row-span-3 bg-white rounded-[30px] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-4xl font-bold text-[#1D1D1F] mb-2 tracking-tight">Designing for<br>the Future.</h2>
          <p class="text-lg text-gray-500 font-medium">Product Designer & Developer</p>
        </div>
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl">👨‍💻</div>
      </div>
      <div class="mt-8">
        <button class="bg-[#1D1D1F] text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform active:scale-95">Contact Me</button>
      </div>
    </div>

    <!-- Map/Location (Top Right) -->
    <div class="md:col-span-2 md:row-span-3 bg-[#007AFF] rounded-[30px] p-6 text-white shadow-sm flex flex-col justify-between relative overflow-hidden group cursor-pointer">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
      <div class="relative z-20">
        <p class="text-sm font-medium opacity-80 uppercase tracking-wide">Based in</p>
        <h3 class="text-2xl font-bold">San Francisco</h3>
      </div>
      <div class="absolute right-4 bottom-4 z-20 bg-white/20 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-white group-hover:text-[#007AFF] transition-all">
        ↗
      </div>
      <!-- Map Pattern Placeholder -->
      <div class="absolute inset-0 opacity-30 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>

    <!-- Stats (Middle Left) -->
    <div class="md:col-span-2 md:row-span-2 bg-white rounded-[30px] p-6 flex flex-col justify-center items-center text-center shadow-sm hover:scale-[1.02] transition-transform">
      <h4 class="text-5xl font-bold text-[#1D1D1F] mb-1">8+</h4>
      <p class="text-gray-500 font-medium">Years Experience</p>
    </div>

    <!-- Tools (Middle Center) -->
    <div class="md:col-span-2 md:row-span-2 bg-[#F2F2F7] rounded-[30px] p-6 flex flex-wrap gap-2 content-center justify-center shadow-sm">
      <span class="bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-700 shadow-sm">Figma</span>
      <span class="bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-700 shadow-sm">React</span>
      <span class="bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-700 shadow-sm">SwiftUI</span>
      <span class="bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-700 shadow-sm">Node.js</span>
      <span class="bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-700 shadow-sm">Next.js</span>
    </div>

    <!-- Social (Middle Right) -->
    <div class="md:col-span-2 md:row-span-2 bg-black rounded-[30px] p-6 flex items-center justify-center text-white shadow-sm hover:bg-gray-900 transition-colors cursor-pointer">
      <span class="font-bold text-xl">Follow on X</span>
    </div>
  </div>
</div>`;