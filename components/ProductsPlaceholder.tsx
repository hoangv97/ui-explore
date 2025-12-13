import React from 'react';
import { Package } from 'lucide-react';

const ProductsPlaceholder: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-6">
        <Package size={40} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Products Catalog</h2>
      <p className="text-gray-500 max-w-md text-center">
        We are currently building a curated list of ready-to-use products and templates based on the styles you love. Check back soon!
      </p>
    </div>
  );
};

export default ProductsPlaceholder;