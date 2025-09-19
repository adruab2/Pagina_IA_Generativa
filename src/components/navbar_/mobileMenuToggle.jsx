import React from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenuToggle = ({ isScrolled, isMobileMenuOpen, onToggle }) => {
  return (
    <div className="md:hidden flex justify-between items-center py-4">
      <div className="text-xl font-bold">
        <span className={isScrolled ? 'text-gray-800' : 'text-white'}>
          IA Academy
        </span>
      </div>
      
      <button
        onClick={onToggle}
        className={`p-2 rounded-md transition-colors ${
          isScrolled 
            ? 'text-gray-700 hover:bg-gray-100' 
            : 'text-white hover:bg-white/10'
        }`}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default MobileMenuToggle;