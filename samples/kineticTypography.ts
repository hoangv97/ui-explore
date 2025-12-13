export const KINETIC_TYPOGRAPHY_SAMPLE = `<div class="w-full max-w-4xl mx-auto bg-black overflow-hidden relative h-[400px] flex flex-col justify-center">
  
  <!-- Moving Text Background -->
  <div class="absolute inset-0 flex flex-col justify-center opacity-20 pointer-events-none">
     <div class="whitespace-nowrap text-[8rem] font-black text-transparent stroke-text animate-scroll-left">
       MOTION EMOTION MOTION EMOTION MOTION EMOTION
     </div>
     <div class="whitespace-nowrap text-[8rem] font-black text-transparent stroke-text animate-scroll-right">
       DESIGN FUTURE DESIGN FUTURE DESIGN FUTURE
     </div>
  </div>

  <!-- Central Focus -->
  <div class="relative z-10 text-center">
    <h2 class="text-6xl md:text-8xl font-black text-white mix-blend-overlay tracking-tighter hover:tracking-normal transition-all duration-500 cursor-default group">
      <span class="inline-block hover:-translate-y-4 transition-transform duration-300 text-red-500">K</span>
      <span class="inline-block hover:-translate-y-4 transition-transform duration-300 delay-75">I</span>
      <span class="inline-block hover:-translate-y-4 transition-transform duration-300 delay-100">N</span>
      <span class="inline-block hover:-translate-y-4 transition-transform duration-300 delay-150 text-blue-500">E</span>
      <span class="inline-block hover:-translate-y-4 transition-transform duration-300 delay-200">T</span>
      <span class="inline-block hover:-translate-y-4 transition-transform duration-300 delay-300">I</span>
      <span class="inline-block hover:-translate-y-4 transition-transform duration-300 delay-400">C</span>
    </h2>
    
    <div class="mt-8 overflow-hidden h-8">
      <div class="text-white font-mono text-lg animate-slide-up">
        <div>Scroll to animate</div>
        <div class="text-red-500">Hover to interact</div>
        <div class="text-blue-500">Type in motion</div>
        <div>Scroll to animate</div>
      </div>
    </div>
  </div>
</div>

<style>
.stroke-text {
  -webkit-text-stroke: 2px white;
}
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
@keyframes slide-up {
  0%, 20% { transform: translateY(0); }
  33%, 53% { transform: translateY(-100%); }
  66%, 86% { transform: translateY(-200%); }
  100% { transform: translateY(-300%); }
}
.animate-scroll-left { animation: scroll-left 20s linear infinite; }
.animate-scroll-right { animation: scroll-right 20s linear infinite; }
.animate-slide-up { animation: slide-up 6s cubic-bezier(0.83, 0, 0.17, 1) infinite; }
</style>`;