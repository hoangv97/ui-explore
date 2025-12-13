import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, Github } from 'lucide-react';
import { UI_STYLES } from './constants';
import { UIStyleData, ViewState } from './types';
import StyleCard from './components/StyleCard';
import LiveEditor from './components/LiveEditor';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>('LIST');
  const [selectedStyle, setSelectedStyle] = useState<UIStyleData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterComplexity, setFilterComplexity] = useState<string>('All');

  // Filter Logic
  const filteredStyles = useMemo(() => {
    return UI_STYLES.filter((style) => {
      const matchesSearch = 
        style["Style Category"].toLowerCase().includes(searchTerm.toLowerCase()) ||
        style.Keywords.toLowerCase().includes(searchTerm.toLowerCase()) ||
        style["Best For"].toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesComplexity = filterComplexity === 'All' || style.Complexity === filterComplexity;

      return matchesSearch && matchesComplexity;
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

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleBack}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Layers size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">UI<span className="text-blue-600">Explore</span></span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {viewState === 'LIST' && (
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
            <div className="mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-200 flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search styles (e.g., 'Clean', 'SaaS', 'Dark Mode')..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter size={18} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Complexity:</span>
                <select 
                  className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                  value={filterComplexity}
                  onChange={(e) => setFilterComplexity(e.target.value)}
                >
                  <option value="All">All Levels</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
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
              <div className="text-center py-20">
                <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                  <Search size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No styles found</h3>
                <p className="text-gray-500">Try adjusting your search terms or filters.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setFilterComplexity('All');}}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}

        {viewState === 'DETAIL' && selectedStyle && (
          <div className="animate-in fade-in zoom-in-95 duration-300">
             <LiveEditor style={selectedStyle} onBack={handleBack} />
          </div>
        )}

      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} UI Style Explorer. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;