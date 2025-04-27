import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import ProductCard from './ProductCard';
import { watches } from '../data/watches';

const FeaturedProducts: React.FC = () => {
  // Выбираем 3 популярных товара
  const popularProducts = watches.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Популярные модели</h2>
          <Button variant="outline" className="border-black" asChild>
            <Link to="/catalog">Смотреть все</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
