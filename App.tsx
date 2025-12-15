import React, { useState } from 'react';
import { Layers, Github, Package, Palette, LayoutTemplate, Type } from 'lucide-react';
import UIStylesExplorer from './components/UIStylesExplorer';
import ProductsExplorer from './components/ProductsExplorer';
import LandingPagesExplorer from './components/LandingPagesExplorer';
import TypographyExplorer from './components/TypographyExplorer';

type Tab = 'STYLES' | 'PRODUCTS' | 'LANDING' | 'TYPOGRAPHY';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('STYLES');
  const [targetStyle, setTargetStyle] = useState<string | null>(null);

  const handleNavigateToStyle = (styleName: string) => {
    setTargetStyle(styleName);
    setActiveTab('STYLES');
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    // If navigating manually to styles, clear any specific target unless intended
    if (tab === 'STYLES' && activeTab === 'STYLES') {
      setTargetStyle(null);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleTabChange('STYLES')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Layers size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">UI<span className="text-blue-600">Explore</span></span>
          </div>
          
          {/* Desktop Tab Navigation */}
          <div className="hidden md:flex items-center bg-gray-100 p-1 rounded-lg">
             <button 
               onClick={() => handleTabChange('STYLES')}
               className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${activeTab === 'STYLES' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
             >
               <Palette size={16} /> UI Styles
             </button>
             <button 
               onClick={() => handleTabChange('PRODUCTS')}
               className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${activeTab === 'PRODUCTS' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
             >
               <Package size={16} /> Products
             </button>
             <button 
               onClick={() => handleTabChange('LANDING')}
               className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${activeTab === 'LANDING' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
             >
               <LayoutTemplate size={16} /> Landing Pages
             </button>
             <button 
               onClick={() => handleTabChange('TYPOGRAPHY')}
               className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${activeTab === 'TYPOGRAPHY' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
             >
               <Type size={16} /> Typography
             </button>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Tab Navigation (Sub-header) */}
        <div className="md:hidden border-t border-gray-100 px-4 py-2 flex gap-4 overflow-x-auto custom-scrollbar">
             <button 
               onClick={() => handleTabChange('STYLES')}
               className={`flex-1 py-2 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${activeTab === 'STYLES' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}
             >
               UI Styles
             </button>
             <button 
               onClick={() => handleTabChange('PRODUCTS')}
               className={`flex-1 py-2 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${activeTab === 'PRODUCTS' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}
             >
               Products
             </button>
             <button 
               onClick={() => handleTabChange('LANDING')}
               className={`flex-1 py-2 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${activeTab === 'LANDING' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}
             >
               Landing
             </button>
             <button 
               onClick={() => handleTabChange('TYPOGRAPHY')}
               className={`flex-1 py-2 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${activeTab === 'TYPOGRAPHY' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}
             >
               Fonts
             </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'STYLES' && (
          <UIStylesExplorer initialStyleName={targetStyle} />
        )}
        {activeTab === 'PRODUCTS' && (
          <ProductsExplorer onNavigateToStyle={handleNavigateToStyle} />
        )}
        {activeTab === 'LANDING' && (
          <LandingPagesExplorer />
        )}
        {activeTab === 'TYPOGRAPHY' && (
          <TypographyExplorer />
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