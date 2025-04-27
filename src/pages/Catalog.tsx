import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FiltersPanel from '@/components/FiltersPanel';
import ProductCard from '@/components/ProductCard';
import { watches } from '@/data/watches';

const Catalog: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 5000
  });
  const [filteredProducts, setFilteredProducts] = useState(watches);

  useEffect(() => {
    let filtered = watches;
    
    // Фильтр по бренду
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Фильтр по цене
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    setFilteredProducts(filtered);
  }, [selectedBrands, priceRange]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Каталог часов</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-64 flex-shrink-0">
              <FiltersPanel
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </aside>
            
            <div className="flex-grow">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">
                    Товары не найдены. Попробуйте изменить параметры фильтра.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
