export const REAL_TIME_MONITORING_SAMPLE = `<div class="w-full max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg font-mono text-gray-300 border border-gray-800">
  <!-- Status Header -->
  <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
    <div class="flex items-center gap-3">
      <div class="relative">
        <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div class="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      </div>
      <h2 class="text-white font-bold text-lg tracking-wider">SYSTEM MONITOR <span class="text-gray-600 text-sm font-normal">| US-EAST-1</span></h2>
    </div>
    <div class="flex gap-4 text-xs">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-green-500 rounded-full"></span>
        <span>24 Nodes Active</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 bg-red-500 rounded-full"></span>
        <span class="text-red-400 font-bold">1 Alert</span>
      </div>
    </div>
  </div>

  <!-- Live Graph -->
  <div class="bg-gray-950 rounded border border-gray-800 p-4 mb-6 relative overflow-hidden h-48">
    <div class="absolute top-2 right-2 text-xs text-green-500 font-bold">LIVE INGEST: 420 MB/s</div>
    
    <!-- Simulated Graph Line (SVG) -->
    <svg class="w-full h-full" preserveAspectRatio="none">
      <polyline 
         points="0,100 20,90 40,95 60,80 80,85 100,60 120,70 140,50 160,55 180,40 200,45 220,30 240,60 260,80 280,70 300,90 320,100 340,90 360,95 380,80 400,85 420,60 440,70 460,50 480,55 500,40 520,45 540,30 560,60 580,80 600,70 620,90 640,100 660,90 680,95 700,80 720,85 740,60 760,70 780,50 800,55" 
         fill="none" 
         stroke="#22c55e" 
         stroke-width="2" 
         vector-effect="non-scaling-stroke"
         class="drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]"
      >
        <animate attributeName="points" dur="2s" repeatCount="indefinite"
           values="0,100 20,90 40,95 ...; -20,100 0,90 20,95 ..." /> 
           <!-- Note: Smooth SVG animation requires JS usually, simulated here with static example -->
      </polyline>
      <!-- Grid Lines -->
      <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#333" stroke-width="1" stroke-dasharray="4" />
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#333" stroke-width="1" stroke-dasharray="4" />
      <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#333" stroke-width="1" stroke-dasharray="4" />
    </svg>
  </div>

  <!-- Metric Cards -->
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-gray-800 p-4 rounded border-l-4 border-green-500">
      <div class="text-gray-500 text-xs uppercase mb-1">Latency</div>
      <div class="text-2xl font-bold text-white">24ms</div>
      <div class="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
        <div class="bg-green-500 h-full w-[20%]"></div>
      </div>
    </div>
    
    <div class="bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
      <div class="text-gray-500 text-xs uppercase mb-1">Memory Load</div>
      <div class="text-2xl font-bold text-white">82%</div>
      <div class="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
        <div class="bg-yellow-500 h-full w-[82%]"></div>
      </div>
    </div>

    <div class="bg-gray-800 p-4 rounded border-l-4 border-red-500 animate-pulse bg-red-900/10">
      <div class="text-gray-500 text-xs uppercase mb-1">Error Rate</div>
      <div class="text-2xl font-bold text-red-400">1.2%</div>
      <div class="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
        <div class="bg-red-500 h-full w-[15%]"></div>
      </div>
    </div>
  </div>

  <!-- Recent Logs -->
  <div class="mt-6 border-t border-gray-800 pt-4">
    <h3 class="text-xs text-gray-500 uppercase mb-2">System Log Stream</h3>
    <div class="space-y-1 text-xs font-mono max-h-32 overflow-y-auto">
      <div class="flex gap-4"><span class="text-gray-500">[10:42:01]</span> <span class="text-green-400">INFO</span> Service worker re-registered successfully.</div>
      <div class="flex gap-4"><span class="text-gray-500">[10:42:05]</span> <span class="text-blue-400">DEBUG</span> Packet packet_id=4492 processed.</div>
      <div class="flex gap-4"><span class="text-gray-500">[10:42:12]</span> <span class="text-red-400">WARN</span> High memory usage detected on Node-04.</div>
      <div class="flex gap-4"><span class="text-gray-500">[10:42:15]</span> <span class="text-green-400">INFO</span> Auto-scaling triggered. Adding instance...</div>
    </div>
  </div>
</div>`;