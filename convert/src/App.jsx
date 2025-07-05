import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SidebarToggle } from './components/SidebarToggle';
import { ConverterSection } from './components/ConverterSection';
import { AccelerationConverter } from './converters/acceleration';
import { AngleConverter } from './converters/angle';
import { AreaConverter } from './converters/area';
import { LengthConverter } from './converters/length';
import { SpeedConverter } from './converters/speed';
import { TimeConverter } from './converters/time';
import { VolumeConverter } from './converters/volume';
import { TemperatureConverter } from './converters/temperature';

const categories = [
  {
    key: 'acceleration',
    name: 'Percepatan',
    icon: '🚀',
    description: 'Konversi satuan percepatan'
  },
  {
    key: 'angle',
    name: 'Sudut',
    icon: '📐',
    description: 'Konversi satuan sudut'
  },
  {
    key: 'area',
    name: 'Luas',
    icon: '📏',
    description: 'Konversi satuan luas'
  },
  {
    key: 'length',
    name: 'Panjang',
    icon: '📏',
    description: 'Konversi satuan panjang'
  },
  {
    key: 'speed',
    name: 'Kecepatan',
    icon: '🏃',
    description: 'Konversi satuan kecepatan'
  },
  {
    key: 'time',
    name: 'Waktu',
    icon: '⏰',
    description: 'Konversi satuan waktu'
  },
  {
    key: 'volume',
    name: 'Volume',
    icon: '🪣',
    description: 'Konversi satuan volume'
  },
  {
    key: 'temperature',
    name: 'Suhu',
    icon: '🌡️',
    description: 'Konversi satuan suhu'
  },
];

const converters = {
  acceleration: new AccelerationConverter(),
  angle: new AngleConverter(),
  area: new AreaConverter(),
  length: new LengthConverter(),
  speed: new SpeedConverter(),
  time: new TimeConverter(),
  volume: new VolumeConverter(),
  temperature: new TemperatureConverter(),
};

function App() {
  const [activeCategory, setActiveCategory] = useState('acceleration');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const currentCategory = categories.find(cat => cat.key === activeCategory);
  const currentConverter = converters[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex relative">
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategorySelect={handleCategorySelect}
          isOpen={sidebarOpen}
          onClose={closeSidebar}
        />
        
        <div className="flex-1 lg:ml-0">
          {currentCategory && currentConverter && (
            <ConverterSection
              converter={currentConverter}
              categoryName={currentCategory.name}
              categoryIcon={currentCategory.icon}
              categoryDescription={currentCategory.description}
            />
          )}
        </div>
        
        <SidebarToggle onClick={toggleSidebar} isOpen={sidebarOpen} />
      </div>
    </div>
  );
}

export default App;