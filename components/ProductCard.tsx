import React from 'react';
import { ProductData } from '../types';
import { ArrowRight, Box, Palette } from 'lucide-react';

interface ProductCardProps {
  product: ProductData;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full group"
    >
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Product #{product.No}
          </span>
        </div>
        
        <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-100 p-2 rounded-lg text-gray-600">
                <Box size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product["Product Type"]}
            </h3>
        </div>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {product.Keywords.split(',').join(', ')}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Primary Style</span>
            <div className="flex items-start gap-2">
                <Palette size={14} className="mt-0.5 text-blue-500 shrink-0" />
                <span className="text-sm font-medium text-gray-800 line-clamp-2">
                    {product["Primary Style Recommendation"]}
                </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center group-hover:bg-blue-50 transition-colors">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">View Details</span>
        <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};

export default ProductCard;