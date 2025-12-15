import React, { useState, useMemo } from 'react';
import { Search, X, Type } from 'lucide-react';
import { TYPOGRAPHY_DATA } from '../constants';
import { TypographyData, ViewState } from '../types';
import TypographyCard from './TypographyCard';
import TypographyDetail from './TypographyDetail';

const TypographyExplorer: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('LIST');
  const [selectedFont, setSelectedFont] = useState<TypographyData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFonts = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase().trim();
    if (!lowerSearchTerm) return TYPOGRAPHY_DATA;

    const searchTokens = lowerSearchTerm.split(/\s+/).filter(token => token.length > 0);

    return TYPOGRAPHY_DATA.filter((item) => {
      const searchableContent = `
        ${item["Font Pairing Name"]}
        ${item["Heading Font"]}
        ${item["Body Font"]}
        ${item["Mood/Style Keywords"]}
        ${item.Category}
      `.toLowerCase();

      return searchTokens.every(token => searchableContent.includes(token));
    });
  }, [searchTerm]);

  const handleFontSelect = (data: TypographyData) => {
    setSelectedFont(data);
    setViewState('DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setViewState('LIST');
    setSelectedFont(null);
  };

  if (viewState === 'DETAIL' && selectedFont) {
    return (
      <TypographyDetail 
        data={selectedFont} 
        onBack={handleBack} 
      />
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">
          Typography <span className="text-indigo-600">Pairings</span>
        </h1>
        <p className="text-lg text-gray-600">
          Curated Google Font combinations optimized for modern UI, editorial, and branding.
        </p>
      </div>

      <div className="mb-8 relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search fonts (e.g., 'Serif', 'Modern', 'Roboto')..."
          className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-lg"
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

      {filteredFonts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFonts.map((font) => (
            <TypographyCard 
              key={font.STT} 
              data={font} 
              onClick={() => handleFontSelect(font)} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
            <Type size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No pairings found</h3>
          <p className="text-gray-500 max-w-xs mx-auto">
            We couldn't find any font pairings matching "{searchTerm}".
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

export default TypographyExplorer;