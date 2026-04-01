"use client";

import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cart = useCart();

  const addToCart = () => {
    cart.addItem(product);
    // Visual feedback
    const btn = document.getElementById(`add-${product.id}`);
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = 'Ditambahkan! ✅';
      btn.classList.add('bg-green-500');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('bg-green-500');
      }, 1500);
    }
  };

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-white/50 overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative h-64 md:h-72 w-full p-4 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent -z-10" />
        <Image
          src={`https://media.ziyadbooks.net/products/${product.image}`}
          alt={product.name}
          fill
          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700 shadow-lg"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          priority
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/400x600/4f46e5/ffffff?text=Buku+${product.name.slice(0,10)}...`;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-lg md:text-xl text-gray-900 line-clamp-2 mb-4 group-hover:text-indigo-600 transition-colors min-h-[3rem]">
          {product.name}
        </h3>
        
        <div className="flex items-baseline justify-between mb-6 flex-grow">
          <div className="text-2xl md:text-3xl font-black text-indigo-600">
            {formattedPrice}
          </div>
        </div>

        {/* Button */}
        <button
          id={`add-${product.id}`}
          onClick={addToCart}
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:scale-[1.02]"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
