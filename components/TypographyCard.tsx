import React from 'react';
import { TypographyData } from '../types';
import { ArrowRight, Type, BookOpen } from 'lucide-react';

interface TypographyCardProps {
  data: TypographyData;
  onClick: () => void;
}

const TypographyCard: React.FC<TypographyCardProps> = ({ data, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full group"
    >
      <style dangerouslySetInnerHTML={{ __html: data["CSS Import"] }} />
      
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {data.Category}
          </span>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                <Type size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {data["Font Pairing Name"]}
            </h3>
        </div>
        
        <p className="text-sm text-gray-500 mb-6 line-clamp-2">
          {data["Mood/Style Keywords"].split(',').join(', ')}
        </p>

        <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <div>
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1 block">Heading Font</span>
            <div className="text-2xl text-gray-900 leading-tight" style={{ fontFamily: data["Heading Font"] }}>
              {data["Heading Font"]}
            </div>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1 block">Body Font</span>
            <div className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: data["Body Font"] }}>
              The quick brown fox jumps over the lazy dog. {data["Body Font"]} is legible and clean.
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center group-hover:bg-indigo-50 transition-colors">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">View Pairing</span>
        <ArrowRight size={16} className="text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

export default TypographyCard;