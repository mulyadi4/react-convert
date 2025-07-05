import React from 'react';
import { Menu } from 'lucide-react';

export const SidebarToggle = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 left-6 z-60 lg:hidden
        bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
        text-white p-4 rounded-full shadow-2xl
        transition-all duration-300 transform hover:scale-110
        ${isOpen ? 'rotate-90' : 'rotate-0'}
      `}
      aria-label="Toggle Sidebar"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
};