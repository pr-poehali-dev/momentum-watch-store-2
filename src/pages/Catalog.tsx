import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FiltersPanel from '@/components/FiltersPanel';
import { watches } from '@/data/watches';

const Catalog: React.FC = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });
  const [filteredProducts, setFilteredProducts] = useState(watches);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let result = watches;
    
    // Фильтр по брендам
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Фильтр по цене
    result = result.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    setFilteredProducts(result);
  }, [selectedBrands, priceRange]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Каталог часов</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Мобильная кнопка фильтров */}
            <button 
              className="md:hidden bg-white border border-gray-200 p-3 rounded-lg mb-4 font-medium flex items-center justify-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? 'Скрыть фильтры' : 'Показать фильтры'}
            </button>
            
            {/* Панель фильтров */}
            <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
              <FiltersPanel 
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>
            
            {/* Товары */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg">По вашему запросу ничего не найдено</p>
                  <p className="text-gray-600 mt-2">Попробуйте изменить параметры фильтрации</p>
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
