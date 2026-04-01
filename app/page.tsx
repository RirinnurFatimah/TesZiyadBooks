import ProductGrid from "../component/productgrid";
import { getProducts } from "../lib/api";
import { Product } from "../lib/types";

export default async function Home() {
  const apiData = await getProducts();
  const products = apiData || [];
  console.log('Products received:', apiData?.length || 0);

  return (
    <main className="min-h-screen">
      {/* HERO */}
<section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50" />

  <div className="relative max-w-5xl mx-auto text-center">

    {/* badge kecil (ringkas!) */}
    <div className="inline-block mb-6 px-5 py-2 bg-white/80 backdrop-blur rounded-full border shadow-sm">
      <span className="text-sm font-medium text-indigo-600">
        Buku Anak & Keluarga Islami
      </span>
    </div>

    {/* title */}
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      Temukan Buku <span className="text-indigo-600">Favoritmu</span> 📚
    </h1>

    {/* deskripsi utama */}
    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
      Ziyad Books menghadirkan buku anak dan keluarga berkualitas, 
      dengan nilai islami, edukatif, dan penuh makna.
    </p>

    {/* deskripsi tambahan (lebih kecil) */}
    <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10">
      Mulai dari board book, cerita bergambar, hingga panduan parenting —
      semua dirancang untuk mendukung tumbuh kembang anak.
    </p>

    {/* button */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <a
        href="#katalog"
        className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-600 transition"
      >
        Jelajahi Buku
      </a>

      <button className="px-8 py-4 border border-gray-300 bg-white rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition">
        Lihat Koleksi
      </button>
    </div>

  </div>
</section>

      {/* PRODUCTS */}
      <section id="katalog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Katalog Buku Terlengkap ({products.length} buku)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilihan editor ZiyadBooks untuk kamu yang ingin berkembang
            </p>
          </div>
          
          <ProductGrid products={products} />
          
          <div className="text-center mt-16">
            <a href="#" className="inline-block px-12 py-5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all inline-flex items-center gap-2">
              Lihat Lebih Banyak Buku 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="fitur" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Siap Mengubah Hidupmu?
          </h3>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
            Mulai perjalananmu dengan buku-buku terbaik sekarang juga
          </p>
          <a href="#" className="inline-block px-12 py-6 bg-white text-slate-900 font-black rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all">
            Beli Buku Pertama Sekarang
          </a>
        </div>
      </section>
    </main>
  );
}
