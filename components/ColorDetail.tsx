import React, { useState } from 'react';
import { ColorData } from '../types';
import { ArrowLeft, Palette, Copy, Check, Info } from 'lucide-react';

interface ColorDetailProps {
  data: ColorData;
  onBack: () => void;
}

const CopyableColor = ({ label, hex }: { label: string, hex: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      <div 
        className="w-full h-24 rounded-lg shadow-sm border border-black/5 cursor-pointer relative group transition-transform hover:scale-[1.02]"
        style={{ backgroundColor: hex }}
        onClick={handleCopy}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-lg">
           <span className="bg-white/90 text-black text-xs font-bold px-2 py-1 rounded shadow-sm">
             {copied ? "Copied!" : "Click to Copy"}
           </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">{label}</p>
          <p className="text-sm font-mono text-gray-500">{hex}</p>
        </div>
        <button 
          onClick={handleCopy} 
          className="text-gray-400 hover:text-pink-600 transition-colors"
          title="Copy Hex"
        >
          {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
};

const ColorDetail: React.FC<ColorDetailProps> = ({ data, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" /> Back to Colors
      </button>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-pink-600">
               <Palette size={28} />
            </div>
            <div>
               <h1 className="text-3xl font-bold text-gray-900">{data["Product Type"]}</h1>
               <p className="text-gray-500 text-sm mt-1">Color Palette #{data.No}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {data.Keywords.split(',').map((keyword, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                #{keyword.trim()}
              </span>
            ))}
            <div className="flex items-center gap-1 ml-2 text-sm text-gray-500">
                <Info size={14} />
                <span className="italic">"{data.Notes}"</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Palette Composition</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            <CopyableColor label="Primary" hex={data["Primary (Hex)"]} />
            <CopyableColor label="Secondary" hex={data["Secondary (Hex)"]} />
            <CopyableColor label="CTA" hex={data["CTA (Hex)"]} />
            <CopyableColor label="Background" hex={data["Background (Hex)"]} />
            <CopyableColor label="Text" hex={data["Text (Hex)"]} />
            <CopyableColor label="Border" hex={data["Border (Hex)"]} />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-6">Live Preview</h3>
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
             {/* Mock Browser Header */}
             <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-400 font-mono">preview.app</div>
             </div>
             
             {/* Mock UI Content */}
             <div 
                className="p-8 md:p-12 transition-colors duration-300"
                style={{ backgroundColor: data["Background (Hex)"], color: data["Text (Hex)"] }}
             >
                <div className="max-w-3xl mx-auto">
                   <header className="flex justify-between items-center mb-16">
                      <div className="font-bold text-xl flex items-center gap-2">
                         <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: data["Primary (Hex)"] }}></div>
                         <span>Brand</span>
                      </div>
                      <nav className="hidden md:flex gap-6 text-sm font-medium opacity-80">
                         <span>Products</span>
                         <span>Solutions</span>
                         <span>Pricing</span>
                      </nav>
                      <button 
                        className="px-4 py-2 rounded-lg text-sm font-medium transition-transform active:scale-95 shadow-sm hover:opacity-90"
                        style={{ backgroundColor: data["Primary (Hex)"], color: '#FFFFFF' }}
                      >
                        Sign In
                      </button>
                   </header>

                   <main className="text-center py-10">
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                        style={{ backgroundColor: `${data["Secondary (Hex)"]}20`, color: data["Secondary (Hex)"] }}
                      >
                        New Release v2.0
                      </span>
                      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                         Build faster with <span style={{ color: data["Primary (Hex)"] }}>Confidence</span>.
                      </h1>
                      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-80 leading-relaxed">
                         The ultimate toolkit designed to help you scale your product with consistent design tokens and accessible colors.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-center gap-4">
                         <button 
                           className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:-translate-y-1 transition-all"
                           style={{ backgroundColor: data["CTA (Hex)"], color: '#FFFFFF' }}
                         >
                           Get Started Free
                         </button>
                         <button 
                           className="px-8 py-4 rounded-lg font-bold text-lg border hover:bg-black/5 transition-colors"
                           style={{ borderColor: data["Border (Hex)"], color: data["Text (Hex)"] }}
                         >
                           View Documentation
                         </button>
                      </div>
                   </main>

                   <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className="p-6 rounded-xl border transition-shadow hover:shadow-md"
                          style={{ backgroundColor: '#FFFFFF', borderColor: data["Border (Hex)"] }}
                        >
                           <div 
                             className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                             style={{ backgroundColor: `${data["Secondary (Hex)"]}15`, color: data["Secondary (Hex)"] }}
                           >
                             <Palette size={20} />
                           </div>
                           <h3 className="font-bold text-lg mb-2">Feature {i}</h3>
                           <p className="text-sm opacity-70">
                             Optimized for conversion and readability with high contrast ratios.
                           </p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorDetail;