'use client';

import { useCart } from '../lib/cart-context';

export default function CartIcon() {
  const { getTotalCount } = useCart();
  const count = getTotalCount();

  const handleClick = () => {
    if (count > 0) {
      alert(`Keranjang memiliki ${count} item${count > 1 ? 's' : ''}`);
    } else {
      alert('Keranjang kosong');
    }
  };

  return (
    <div 
      onClick={handleClick}
      role="button" 
      tabIndex={0}
      className="relative p-2 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition-all duration-300 hover:scale-110 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
    >
      <div className="text-2xl">🛒</div>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg border-2 border-white">
          {count}
        </span>
      )}
      <div className="absolute opacity-0 group-hover:opacity-100 bg-white/95 backdrop-blur-sm shadow-xl rounded-lg px-3 py-1 text-xs font-bold text-gray-800 whitespace-nowrap -bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-200 pointer-events-none z-50 border border-gray-200">
        Keranjang ({count})
      </div>
    </div>
  );
}
