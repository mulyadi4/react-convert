import React from 'react';
import { Calculator, Zap } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-6 py-6 shadow-2xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
            <Calculator className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              ConvertLIVE
            </h1>
            <p className="text-blue-100 text-sm">Konverter Satuan Modern</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <Zap className="w-4 h-4 text-yellow-300" />
          <span className="text-sm font-medium">Instant Convert</span>
        </div>
      </div>
    </header>
  );
};