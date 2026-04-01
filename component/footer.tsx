export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-indigo-900/80 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-black bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            ZiyadBooks
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-md">
            Ziyad Books adalah penerbit buku yang berfokus pada buku anak-anak dan buku Islam, terutama untuk pendidikan usia dini.
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-6 text-slate-200">Kategori Populer</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all block">Buku Anak Islami</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all block">Pendidikan & Aktivitas Anak</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all block">Parenting & Keluarga</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-6 text-slate-200">Bantuan</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all block">FAQ</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all block">Pengiriman</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all block">Kontak Kami</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-6 text-slate-200">Newsletter</h4>
          <p className="text-slate-400 mb-4 text-sm">
            Dapatkan update buku terbaru setiap minggu
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Email Anda"
              className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-xl transition-all hover:from-indigo-600 hover:to-blue-700">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-700/50 mt-12 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 ZiyadBooks. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Privasi</a>
            <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Syarat Layanan</a>
            <a href="#" className="hover:text-white hover:translate-x-1 transition-all">Kebijakan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
