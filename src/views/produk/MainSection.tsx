const MainSection = () => {
  return (
    <main className="max-w-5xl mx-auto py-10 px-5">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Daftar Produk</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contoh Kartu Produk */}
        <div className="p-5 border border-gray-200 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-bold text-xl mb-2">Produk A</h3>
          <p className="text-gray-600">Rp 100.000</p>
        </div>
        <div className="p-5 border border-gray-200 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-bold text-xl mb-2">Produk B</h3>
          <p className="text-gray-600">Rp 250.000</p>
        </div>
        <div className="p-5 border border-gray-200 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-bold text-xl mb-2">Produk C</h3>
          <p className="text-gray-600">Rp 500.000</p>
        </div>
      </div>
    </main>
  );
};

export default MainSection;