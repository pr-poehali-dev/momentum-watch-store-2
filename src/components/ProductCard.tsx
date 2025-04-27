import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/watches';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  const discountedPrice = product.discount 
    ? Math.round(product.price * (1 - product.discount / 100)) 
    : product.price;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <Link to={`/product/${product.id}`} className="block relative">
        {product.discount && (
          <div className="discount-badge">-{product.discount}%</div>
        )}
        <div className="h-60 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-bold text-lg hover:text-gray-600 transition-colors">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">
              {discountedPrice} ₽
            </span>
            {product.discount && (
              <span className="line-through text-gray-400 text-sm">
                {product.price} ₽
              </span>
            )}
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart} 
          className="w-full bg-black hover:bg-gray-800 hover-scale"
        >
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
