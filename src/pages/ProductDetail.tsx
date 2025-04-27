import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { watches } from '@/data/watches';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(watches.find(watch => watch.id === Number(id)));
  
  useEffect(() => {
    // Прокрутка страницы вверх при загрузке
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
            <p className="mb-8">К сожалению, запрашиваемый товар не существует или был удален.</p>
            <Button className="bg-black hover:bg-gray-800" asChild>
              <Link to="/catalog">Вернуться в каталог</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Изображение */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-contain max-h-[500px]"
                />
              </div>
            </div>
            
            {/* Информация о товаре */}
            <div className="w-full lg:w-1/2">
              <div className="mb-4">
                <Link to="/catalog" className="text-sm text-gray-600 hover:underline">
                  &larr; Назад в каталог
                </Link>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-gray-700 mb-4">{product.brand}</p>
              
              <div className="text-3xl font-bold mb-6">{product.price.toLocaleString()} ₽</div>
              
              <div className="mb-8">
                <Button 
                  className="w-full bg-black hover:bg-gray-800 py-6"
                  onClick={() => addToCart(product)}
                >
                  Добавить в корзину
                </Button>
              </div>
              
              <div className="prose">
                <h2 className="text-xl font-bold mb-3">Описание</h2>
                <p>{product.description}</p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-2">Преимущества наших часов:</h3>
                  <ul>
                    <li>Высококачественная реплика премиального бренда</li>
                    <li>Точная копия оригинального дизайна</li>
                    <li>Надежный механизм</li>
                    <li>Доступная цена</li>
                    <li>Гарантия качества</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-bold mb-2">Доставка и оплата:</h3>
                  <p>
                    Доставка по Луганску и области. Оплата наличными или картой при получении.
                    Также возможен самовывоз из нашего магазина.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
