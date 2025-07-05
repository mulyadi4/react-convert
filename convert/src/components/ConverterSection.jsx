import React, { useState, useEffect } from 'react';
import { ArrowLeftRight, Info } from 'lucide-react';

export const ConverterSection = ({
  converter,
  categoryName,
  categoryIcon,
  categoryDescription,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const availableUnits = converter.getUnits();
    setUnits(availableUnits);
    
    if (availableUnits.length > 0) {
      setFromUnit(availableUnits[0].key);
      setToUnit(availableUnits.length > 1 ? availableUnits[1].key : availableUnits[0].key);
    }
    
    setInputValue('');
    setOutputValue('');
  }, [converter]);

  useEffect(() => {
    if (inputValue && !isNaN(Number(inputValue)) && fromUnit && toUnit) {
      const result = converter.convert(Number(inputValue), fromUnit, toUnit);
      setOutputValue(formatResult(result));
    } else {
      setOutputValue('');
    }
  }, [inputValue, fromUnit, toUnit, converter]);

  const formatResult = (value) => {
    if (Math.abs(value) >= 1000000 || (Math.abs(value) < 0.001 && value !== 0)) {
      return value.toExponential(6);
    }
    return parseFloat(value.toFixed(10)).toString();
  };

  const handleSwap = () => {
    const tempUnit = fromUnit;
    const tempValue = inputValue;
    
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setInputValue(outputValue);
    
    if (outputValue) {
      const result = converter.convert(Number(outputValue), toUnit, tempUnit);
      setOutputValue(formatResult(result));
    }
  };

  return (
    <main className="flex-1 p-4 lg:p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 lg:p-4 rounded-2xl shadow-lg">
              <span className="text-2xl lg:text-3xl">{categoryIcon}</span>
            </div>
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2">{categoryName}</h2>
              <p className="text-gray-600 text-sm lg:text-lg">{categoryDescription}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 lg:p-8 shadow-2xl border border-gray-100 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
            {/* Input Section */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nilai Input
                </label>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Masukkan nilai"
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-base lg:text-lg font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Dari Satuan
                </label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-base lg:text-lg font-medium bg-white"
                >
                  {units.map((unit) => (
                    <option key={unit.key} value={unit.key}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <div className="lg:col-span-1 flex justify-center order-last lg:order-none">
              <button
                onClick={handleSwap}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 lg:p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-xl group"
              >
                <ArrowLeftRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-180 transition-transform duration-300" />
              </button>
            </div>

            {/* Output Section */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hasil Konversi
                </label>
                <input
                  type="text"
                  value={outputValue}
                  readOnly
                  placeholder="Hasil akan muncul di sini"
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border-2 border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 text-base lg:text-lg font-bold text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ke Satuan
                </label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 text-base lg:text-lg font-medium bg-white"
                >
                  {units.map((unit) => (
                    <option key={unit.key} value={unit.key}>
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 lg:mt-8 bg-white rounded-2xl p-4 lg:p-6 shadow-lg border border-gray-100">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Info className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">Tips Penggunaan</h3>
              <ul className="text-gray-600 space-y-1 text-xs lg:text-sm">
                <li>• Masukkan nilai numerik pada kolom input untuk memulai konversi</li>
                <li>• Gunakan tombol swap untuk menukar satuan input dan output</li>
                <li>• Hasil konversi akan muncul secara otomatis saat Anda mengetik</li>
                <li>• Semua konversi menggunakan standar internasional yang akurat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};