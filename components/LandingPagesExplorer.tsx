import React, { useState, useMemo } from 'react';
import { Search, X, LayoutTemplate } from 'lucide-react';
import { LANDING_PAGES_DATA } from '../constants';
import { LandingPageData, ViewState } from '../types';
import LandingPageCard from './LandingPageCard';
import LandingPageDetail from './LandingPageDetail';

const LandingPagesExplorer: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('LIST');
  const [selectedPage, setSelectedPage] = useState<LandingPageData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase().trim();
    if (!lowerSearchTerm) return LANDING_PAGES_DATA;

    const searchTokens = lowerSearchTerm.split(/\s+/).filter(token => token.length > 0);

    return LANDING_PAGES_DATA.filter((page) => {
      const searchableContent = `
        ${page["Pattern Name"]}
        ${page.Keywords}
        ${page["Section Order"]}
        ${page["Primary CTA Placement"]}
      `.toLowerCase();

      return searchTokens.every(token => searchableContent.includes(token));
    });
  }, [searchTerm]);

  const handlePageSelect = (page: LandingPageData) => {
    setSelectedPage(page);
    setViewState('DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setViewState('LIST');
    setSelectedPage(null);
  };

  if (viewState === 'DETAIL' && selectedPage) {
    return (
      <LandingPageDetail 
        pageData={selectedPage} 
        onBack={handleBack} 
      />
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">
          Landing Page <span className="text-teal-600">Patterns</span>
        </h1>
        <p className="text-lg text-gray-600">
          Proven structural templates and layouts optimized for conversion, storytelling, and user engagement.
        </p>
      </div>

      <div className="mb-8 relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search patterns (e.g., 'SaaS', 'Funnel', 'Pricing')..."
          className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
            title="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {filteredPages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => (
            <LandingPageCard 
              key={page.No} 
              pageData={page} 
              onClick={() => handlePageSelect(page)} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
            <LayoutTemplate size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No patterns found</h3>
          <p className="text-gray-500 max-w-xs mx-auto">
            We couldn't find any landing page patterns matching "{searchTerm}".
          </p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-6 px-6 py-2 bg-white border border-gray-300 shadow-sm rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPagesExplorer;