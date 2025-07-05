import React from 'react';
import { X } from 'lucide-react';

export const Sidebar = ({
  categories,
  activeCategory,
  onCategorySelect,
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:relative top-0 left-0 h-full w-80 bg-white shadow-xl border-r border-gray-100 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          {/* Close button for mobile */}
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <h2 className="text-lg font-semibold text-gray-800">Kategori Konversi</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <div className="mb-6 hidden lg:block">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Kategori Konversi</h2>
            <p className="text-sm text-gray-600">Pilih jenis satuan yang ingin dikonversi</p>
          </div>
          
          <nav className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => {
                  onCategorySelect(category.key);
                  onClose(); // Close sidebar on mobile after selection
                }}
                className={`w-full text-left px-4 py-3 rounded-xl cursor-pointer flex items-center space-x-3 transition-all duration-200 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:shadow-md'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <div className="flex-1">
                  <span className="font-medium block">{category.name}</span>
                  <span className="text-xs opacity-75">{category.description}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};