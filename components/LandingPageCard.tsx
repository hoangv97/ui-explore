import React from 'react';
import { LandingPageData } from '../types';
import { ArrowRight, Layout, Zap, MousePointer } from 'lucide-react';

interface LandingPageCardProps {
  pageData: LandingPageData;
  onClick: () => void;
}

const LandingPageCard: React.FC<LandingPageCardProps> = ({ pageData, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full group"
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
            Pattern #{pageData.No}
          </span>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                <Layout size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
            {pageData["Pattern Name"]}
            </h3>
        </div>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {pageData.Keywords.split(',').join(', ')}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Flow</span>
            <div className="flex items-start gap-2">
                <span className="text-sm font-medium text-gray-800 line-clamp-2">
                    {pageData["Section Order"].split(',').slice(0, 3).join(' → ')}...
                </span>
            </div>
          </div>
          <div className="flex gap-2">
             <div className="flex items-center text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100">
               <MousePointer size={10} className="mr-1" />
               CTA Focus
             </div>
             {pageData["Recommended Effects"] && (
                <div className="flex items-center text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded border border-purple-100">
                  <Zap size={10} className="mr-1" />
                  FX
                </div>
             )}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center group-hover:bg-teal-50 transition-colors">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Inspect Pattern</span>
        <ArrowRight size={16} className="text-gray-400 group-hover:text-teal-600 transform group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

export default LandingPageCard;