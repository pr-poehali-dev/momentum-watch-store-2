import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import ProductCard from './ProductCard';
import { watches } from '../data/watches';

const FeaturedProducts: React.FC = () => {
  // Находим товар со скидкой
  const discountProduct = watches.find(product => product.discount);
  
  // Выбираем 2 других популярных товара, исключая товар со скидкой
  const otherProducts = watches
    .filter(product => !product.discount)
    .slice(0, discountProduct ? 2 : 3);
  
  // Комбинируем товары для отображения, ставя товар со скидкой первым
  const displayProducts = discountProduct 
    ? [discountProduct, ...otherProducts] 
    : otherProducts;
  
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
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
