'use client';

import { useState } from 'react';
import CartIcon from './cart-icon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">📚</span>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-slate-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ZiyadBooks
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#katalog" className="text-lg font-semibold text-slate-700 hover:text-indigo-600 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Katalog
            </a>
            <a href="#fitur" className="text-lg font-semibold text-slate-700 hover:text-indigo-600 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Fitur
            </a>
            <a href="#kontak" className="text-lg font-semibold text-slate-700 hover:text-indigo-600 hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Kontak
            </a>
            <CartIcon />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <CartIcon />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-slate-200 pt-4">
            <a href="#katalog" className="block py-3 px-4 text-lg font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-all">
              Katalog
            </a>
            <a href="#fitur" className="block py-3 px-4 text-lg font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-all">
              Fitur
            </a>
            <a href="#kontak" className="block py-3 px-4 text-lg font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-all">
              Kontak
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
