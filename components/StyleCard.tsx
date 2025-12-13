import React from 'react';
import { UIStyleData } from '../types';
import { ArrowRight, Zap, Smartphone, CheckCircle, AlertTriangle } from 'lucide-react';

interface StyleCardProps {
  style: UIStyleData;
  onClick: () => void;
}

const StyleCard: React.FC<StyleCardProps> = ({ style, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full group"
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {style.Type}
          </span>
          <span className="text-gray-400 text-xs font-mono">#{style.STT}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {style["Style Category"]}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {style.Keywords}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
           {style.Performance.includes('Excellent') && (
             <div className="flex items-center text-xs text-green-700 bg-green-50 px-2 py-1 rounded">
               <Zap size={12} className="mr-1" /> Fast
             </div>
           )}
           {style["Mobile-Friendly"].includes('High') && (
             <div className="flex items-center text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded">
               <Smartphone size={12} className="mr-1" /> Mobile
             </div>
           )}
        </div>

        <div className="space-y-2 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-start text-xs text-gray-500">
            <CheckCircle size={14} className="mr-2 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-1">{style["Best For"].split(',')[0]}</span>
          </div>
           <div className="flex items-start text-xs text-gray-500">
            <AlertTriangle size={14} className="mr-2 text-amber-500 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-1">{style["Do Not Use For"].split(',')[0]}</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Explore</span>
        <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

export default StyleCard;