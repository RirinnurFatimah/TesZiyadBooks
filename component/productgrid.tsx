import ProductCard from "./productcard";
import { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products?.length) {
    return (
      <div className="col-span-full text-center py-20 md:py-32 text-gray-500 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gray-200 rounded-3xl mx-auto mb-8 flex items-center justify-center">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Belum ada produk</h3>
          <p className="text-lg text-gray-600">Katalog akan segera diupdate dengan buku-buku terbaik</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-0">
      {products.map((item, index) => (
        <ProductCard key={item.id || index} product={item} />
      ))}
    </div>
  );
}
