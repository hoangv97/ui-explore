import React from 'react';
import { ProductData } from '../types';
import { ArrowLeft, Box, Palette, Layers, Layout, Monitor } from 'lucide-react';
import { UI_STYLES } from '../constants';

interface ProductDetailProps {
  product: ProductData;
  onBack: () => void;
  onNavigateToStyle: (styleName: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onNavigateToStyle }) => {
  
  // Helper to render styles with links if they exist in UI_STYLES
  const renderStyleLinks = (styleString: string) => {
    // Split by common separators (+, or ,)
    const parts = styleString.split(/\s\+\s|,\s/);
    
    return (
      <div className="flex flex-wrap gap-2 mt-1">
        {parts.map((part, idx) => {
          const cleanPart = part.trim();
          // Simple matching logic: check if any UI style category contains this string
          const matchedStyle = UI_STYLES.find(s => 
            s["Style Category"].toLowerCase() === cleanPart.toLowerCase() || 
            s["Style Category"].toLowerCase().includes(cleanPart.toLowerCase())
          );

          if (matchedStyle) {
            return (
              <button
                key={idx}
                onClick={() => onNavigateToStyle(matchedStyle["Style Category"])}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 border border-blue-200 text-sm font-medium transition-colors cursor-pointer"
                title={`View ${matchedStyle["Style Category"]} Style`}
              >
                <Palette size={12} className="mr-1.5" />
                {cleanPart}
              </button>
            );
          }
          return (
            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200 text-sm font-medium">
              {cleanPart}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" /> Back to Products
      </button>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-blue-600">
               <Box size={24} />
            </div>
            <div>
               <h1 className="text-3xl font-bold text-gray-900">{product["Product Type"]}</h1>
               <p className="text-gray-500 text-sm mt-1">Product #{product.No}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.Keywords.split(',').map((keyword, i) => (
              <span key={i} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-500">
                #{keyword.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Palette size={16} /> Recommended Styles
              </h3>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="mb-4">
                    <span className="text-xs font-semibold text-gray-500 block mb-1">Primary Recommendation</span>
                    {renderStyleLinks(product["Primary Style Recommendation"])}
                </div>
                <div>
                    <span className="text-xs font-semibold text-gray-500 block mb-1">Secondary Options</span>
                    {renderStyleLinks(product["Secondary Styles"])}
                </div>
              </div>
            </div>

            <div>
               <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Monitor size={16} /> Color Focus
              </h3>
               <p className="text-gray-700 bg-white border border-gray-200 p-4 rounded-xl">
                 {product["Color Palette Focus"]}
               </p>
            </div>
          </div>

          <div className="space-y-8">
             <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layout size={16} /> Layout Patterns
              </h3>
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                   <span className="text-xs font-semibold text-blue-600 block mb-1">Landing Page</span>
                   <p className="font-medium text-gray-900">{product["Landing Page Pattern"]}</p>
                </div>
                {product["Dashboard Style (if applicable)"] !== "N/A" && (
                  <div className="bg-white border border-gray-200 p-4 rounded-xl">
                     <span className="text-xs font-semibold text-purple-600 block mb-1">Dashboard</span>
                     <p className="font-medium text-gray-900">{product["Dashboard Style (if applicable)"]}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
               <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers size={16} /> Key Considerations
              </h3>
               <p className="text-gray-700 bg-amber-50 border border-amber-100 p-5 rounded-xl text-sm leading-relaxed">
                 {product["Key Considerations"]}
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;