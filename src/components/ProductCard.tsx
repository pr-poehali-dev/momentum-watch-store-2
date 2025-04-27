import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { Product } from '../data/watches';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group animate-fade-in bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold truncate">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        <p className="text-lg font-bold mb-3">{product.price.toLocaleString()} ₽</p>
        
        <div className="flex justify-between items-center gap-2">
          <Button 
            variant="outline" 
            className="flex-1 border-black hover:bg-gray-100" 
            asChild
          >
            <Link to={`/product/${product.id}`}>Подробнее</Link>
          </Button>
          
          <Button 
            className="flex-1 bg-black hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
