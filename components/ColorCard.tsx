import React from 'react';
import { ColorData } from '../types';
import { ArrowRight, Palette, Copy, Check } from 'lucide-react';

interface ColorCardProps {
  data: ColorData;
  onClick: () => void;
}

const ColorSwatch = ({ color, label }: { color: string, label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div 
      className="w-8 h-8 rounded-full border border-black/10 shadow-sm"
      style={{ backgroundColor: color }}
      title={label}
    />
  </div>
);

const ColorCard: React.FC<ColorCardProps> = ({ data, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-pink-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full group"
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
            Palette #{data.No}
          </span>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                <Palette size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
            {data["Product Type"]}
            </h3>
        </div>
        
        <p className="text-sm text-gray-500 mb-6">
          {data.Notes}
        </p>

        <div className="flex gap-2 justify-between mt-4 px-2 py-3 bg-gray-50 rounded-lg border border-gray-100">
           <ColorSwatch color={data["Primary (Hex)"]} label="Primary" />
           <ColorSwatch color={data["Secondary (Hex)"]} label="Secondary" />
           <ColorSwatch color={data["CTA (Hex)"]} label="CTA" />
           <ColorSwatch color={data["Background (Hex)"]} label="Background" />
           <ColorSwatch color={data["Text (Hex)"]} label="Text" />
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center group-hover:bg-pink-50 transition-colors">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Inspect Palette</span>
        <ArrowRight size={16} className="text-gray-400 group-hover:text-pink-600 transform group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

export default ColorCard;