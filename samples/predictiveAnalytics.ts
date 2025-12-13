export const PREDICTIVE_ANALYTICS_SAMPLE = `<div class="w-full max-w-4xl mx-auto bg-slate-900 p-8 rounded-xl shadow-2xl border border-slate-800">
  <div class="flex justify-between items-start mb-8">
    <div>
      <h2 class="text-2xl font-bold text-white mb-2">Demand Forecast</h2>
      <p class="text-slate-400 text-sm">AI-driven projection for next 30 days based on historical trend.</p>
    </div>
    <div class="bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
      <span class="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
      Confidence: 94%
    </div>
  </div>

  <!-- Chart Area -->
  <div class="relative h-64 w-full bg-slate-800/50 rounded-lg border border-slate-700 p-4 overflow-hidden mb-6">
    <!-- Grid -->
    <div class="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
      <div class="border-b border-slate-700/50 w-full h-0"></div>
      <div class="border-b border-slate-700/50 w-full h-0"></div>
      <div class="border-b border-slate-700/50 w-full h-0"></div>
      <div class="border-b border-slate-700/50 w-full h-0"></div>
    </div>

    <!-- Chart Content -->
    <div class="relative h-full flex items-end">
      <!-- Historical Data (Solid Line simulation) -->
      <div class="w-2/3 h-full flex items-end">
         <svg class="h-full w-full overflow-visible" preserveAspectRatio="none">
            <path d="M0 150 L50 140 L100 160 L150 100 L200 110 L250 80 L300 90 L350 50" fill="none" stroke="#3b82f6" stroke-width="3" />
            <path d="M0 150 L50 140 L100 160 L150 100 L200 110 L250 80 L300 90 L350 50 V 250 H 0 Z" fill="url(#gradientHistorical)" opacity="0.2" />
            <defs>
              <linearGradient id="gradientHistorical" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#3b82f6"/>
                <stop offset="100%" stop-color="transparent"/>
              </linearGradient>
            </defs>
         </svg>
         <!-- Last Historical Point -->
         <div class="absolute bottom-[calc((100%-50px))] left-[calc(66%-4px)] w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900 z-10"></div>
      </div>

      <!-- Predictive Data (Dashed Line & Confidence Interval) -->
      <div class="w-1/3 h-full flex items-end relative">
         <!-- Vertical Divider -->
         <div class="absolute left-0 top-0 bottom-0 border-l-2 border-dashed border-slate-600">
            <span class="absolute top-2 left-2 text-[10px] text-slate-500 uppercase font-bold tracking-wider">Today</span>
         </div>

         <!-- Confidence Interval (Shaded Area) -->
         <svg class="h-full w-full overflow-visible" preserveAspectRatio="none">
            <path d="M0 50 L50 40 L100 20 L150 10" fill="none" stroke="transparent" /> <!-- Upper bound placeholder -->
            <path d="M0 50 L150 10 L150 100 L0 50 Z" fill="#6366f1" opacity="0.15" /> <!-- Cone shape -->
            
            <!-- Predicted Line -->
            <path d="M0 50 L50 45 L100 35 L150 50" fill="none" stroke="#818cf8" stroke-width="3" stroke-dasharray="6 4" />
         </svg>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-4">
    <div class="bg-slate-800 p-4 rounded border-t-4 border-indigo-500">
      <div class="text-slate-400 text-xs mb-1 uppercase font-bold">Projected Peak</div>
      <div class="text-xl font-bold text-white">4,200 Units</div>
      <div class="text-xs text-green-400 mt-1">↑ 15% vs last month</div>
    </div>
    <div class="bg-slate-800 p-4 rounded border-t-4 border-slate-600">
      <div class="text-slate-400 text-xs mb-1 uppercase font-bold">Predicted Floor</div>
      <div class="text-xl font-bold text-white">3,100 Units</div>
      <div class="text-xs text-slate-500 mt-1">Stable baseline</div>
    </div>
    <div class="bg-slate-800 p-4 rounded border-t-4 border-orange-500">
      <div class="text-slate-400 text-xs mb-1 uppercase font-bold">Anomaly Risk</div>
      <div class="text-xl font-bold text-orange-400">Low</div>
      <div class="text-xs text-slate-500 mt-1">No deviations detected</div>
    </div>
  </div>
</div>`;