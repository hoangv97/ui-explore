import React, { useState, useMemo } from 'react';
import { Search, X, Palette } from 'lucide-react';
import { COLORS_DATA } from '../constants';
import { ColorData, ViewState } from '../types';
import ColorCard from './ColorCard';
import ColorDetail from './ColorDetail';

const ColorsExplorer: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('LIST');
  const [selectedColor, setSelectedColor] = useState<ColorData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColors = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase().trim();
    if (!lowerSearchTerm) return COLORS_DATA;

    const searchTokens = lowerSearchTerm.split(/\s+/).filter(token => token.length > 0);

    return COLORS_DATA.filter((color) => {
      const searchableContent = `
        ${color["Product Type"]}
        ${color.Keywords}
        ${color.Notes}
      `.toLowerCase();

      return searchTokens.every(token => searchableContent.includes(token));
    });
  }, [searchTerm]);

  const handleColorSelect = (data: ColorData) => {
    setSelectedColor(data);
    setViewState('DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setViewState('LIST');
    setSelectedColor(null);
  };

  if (viewState === 'DETAIL' && selectedColor) {
    return (
      <ColorDetail 
        data={selectedColor} 
        onBack={handleBack} 
      />
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight sm:text-5xl">
          Color <span className="text-pink-600">Palettes</span>
        </h1>
        <p className="text-lg text-gray-600">
          Professionally curated color schemes optimized for specific product types and industries.
        </p>
      </div>

      <div className="mb-8 relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search palettes (e.g., 'SaaS', 'Dark', 'Healthcare')..."
          className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-lg"
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

      {filteredColors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColors.map((color) => (
            <ColorCard 
              key={color.No} 
              data={color} 
              onClick={() => handleColorSelect(color)} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
            <Palette size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">No palettes found</h3>
          <p className="text-gray-500 max-w-xs mx-auto">
            We couldn't find any color palettes matching "{searchTerm}".
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

export default ColorsExplorer;