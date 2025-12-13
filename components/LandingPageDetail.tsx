import React from 'react';
import { LandingPageData } from '../types';
import { ArrowLeft, Layout, Palette, Zap, TrendingUp, Layers, MousePointer } from 'lucide-react';

interface LandingPageDetailProps {
  pageData: LandingPageData;
  onBack: () => void;
}

const DetailSection = ({ icon: Icon, title, content, className = '' }: { icon: any, title: string, content: string, className?: string }) => (
  <div className={`p-5 rounded-xl border border-gray-100 bg-white ${className}`}>
    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
      <Icon size={16} className="text-teal-500" /> {title}
    </h3>
    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
      {content}
    </p>
  </div>
);

const LandingPageDetail: React.FC<LandingPageDetailProps> = ({ pageData, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" /> Back to Patterns
      </button>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-teal-600">
               <Layout size={28} />
            </div>
            <div>
               <h1 className="text-3xl font-bold text-gray-900">{pageData["Pattern Name"]}</h1>
               <p className="text-gray-500 text-sm mt-1">Landing Page Pattern #{pageData.No}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {pageData.Keywords.split(',').map((keyword, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                #{keyword.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 bg-gray-50/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Primary Structure */}
            <div className="md:col-span-2">
               <DetailSection 
                 icon={Layers} 
                 title="Structure & Flow" 
                 content={pageData["Section Order"].split(', ').join('\n↓ ')} 
                 className="bg-blue-50/50 border-blue-100"
               />
            </div>

            <DetailSection 
              icon={MousePointer} 
              title="CTA Placement" 
              content={pageData["Primary CTA Placement"]} 
            />

            <DetailSection 
              icon={Palette} 
              title="Color Strategy" 
              content={pageData["Color Strategy"]} 
            />

            <DetailSection 
              icon={Zap} 
              title="Recommended Effects" 
              content={pageData["Recommended Effects"]} 
            />

            <DetailSection 
              icon={TrendingUp} 
              title="Conversion Optimization" 
              content={pageData["Conversion Optimization"]} 
              className="bg-green-50/50 border-green-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageDetail;