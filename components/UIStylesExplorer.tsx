import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { UI_STYLES } from '../constants';
import { UIStyleData, ViewState } from '../types';
import StyleCard from './StyleCard';
import LiveEditor from './LiveEditor';

interface UIStylesExplorerProps {
  initialStyleName?: string | null;
}

const UIStylesExplorer: React.FC<UIStylesExplorerProps> = ({ initialStyleName }) => {
  const [viewState, setViewState] = useState<ViewState>('LIST');
  const [selectedStyle, setSelectedStyle] = useState<UIStyleData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterComplexity, setFilterComplexity] = useState<string>('All');

  // Handle deep linking / initial style selection
  useEffect(() => {
    if (initialStyleName) {
      // Try exact match first, then loose match
      const style = UI_STYLES.find(s => 
        s["Style Category"].toLowerCase() === initialStyleName.toLowerCase() ||
        s["Style Category"].toLowerCase().includes(initialStyleName.toLowerCase())
      );
      
      if (style) {
        setSelectedStyle(style);
        setViewState('DETAIL');
        // Scroll to top when opening detail
        window.scrollTo({ top: 0, behavior: 'auto' }); 
      }
    }
  }, [initialStyleName]);

  // Enhanced Filter Logic
  const filteredStyles = useMemo(() => {
    return UI_STYLES.filter((style) => {
      // 1. Complexity Filter
      const matchesComplexity = filterComplexity === 'All' || style.Complexity === filterComplexity;
      if (!matchesComplexity) return false;

      // 2. Search Filter (Token-based fuzzy-like matching)
      const lowerSearchTerm = searchTerm.toLowerCase().trim();
      if (!lowerSearchTerm) return true;

      const searchTokens = lowerSearchTerm.split(/\s+/).filter(token => token.length > 0);
      
      // Combine all relevant fields into a single searchable string
      const searchableContent = `
        ${style["Style Category"]}
        ${style.Keywords}
        ${style["Best For"]}
        ${style["Do Not Use For"]}
        ${style.Type}
        ${style["Era/Origin"]}
        ${style["Primary Colors"]}
        ${style["Effects & Animation"]}
      `.toLowerCase();

      // Check if every token in the search query exists in the style's content
      return searchTokens.every(token => searchableContent.includes(token));
    });
  }, [searchTerm, filterComplexity]);

  const handleStyleSelect = (style: UIStyleData) => {
    setSelectedStyle(style);
    setViewState('DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setViewState('LIST');
    setSelectedStyle(null);
  };

  if (viewState === 'DETAIL' && selectedStyle) {
    return (
       <div className="animate-in fade-in zoom-in-95 duration-300">
          <LiveEditor style={selectedStyle} onBack={handleBack} />
       </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">
          Discover Your <span className="text-blue-600">Digital Aesthetic</span>
        </h1>
        <p className="text-lg text-gray-600">
          Browse, search, and experiment with the most popular UI design systems. View code snippets and preview styles instantly.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-200 flex flex-col md:flex-row gap-4 items-center shadow-sm">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search styles (e.g., 'Clean SaaS', 'Dark Dashboard', 'Retro')..."
            className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <select 
              className="bg-white border border-gray-200 text-gray-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 pr-8 py-3 outline-none appearance-none cursor-pointer hover:border-gray-300 transition-colors"
              value={filterComplexity}
              onChange={(e) => setFilterComplexity(e.target.value)}
            >
              <option value="All">All Complexity</option>
              <option value="Low">Low Complexity</option>
              <option value="Medium">Medium Complexity</option>
              <option value="High">High Complexity</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredStyles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStyles.map((style) => (
            <StyleCard 
              key={style.STT} 
              style={style} 
              onClick={() => handleStyleSelect(style)} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
            <Search size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No styles found</h3>
          <p className="text-gray-500 max-w-xs mx-auto">
            We couldn't find any styles matching "{searchTerm}". Try adjusting your terms or filters.
          </p>
          <button 
            onClick={() => {setSearchTerm(''); setFilterComplexity('All');}}
            className="mt-6 px-6 py-2 bg-white border border-gray-300 shadow-sm rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default UIStylesExplorer;