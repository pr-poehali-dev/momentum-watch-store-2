import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Корзина</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-medium mb-4">Ваша корзина пуста</h2>
              <p className="text-gray-600 mb-8">Добавьте товары в корзину, чтобы оформить заказ</p>
              <Button className="bg-black hover:bg-gray-800" asChild>
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Список товаров */}
              <div className="flex-grow">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b">
                    <div className="col-span-6 font-medium">Товар</div>
                    <div className="col-span-2 font-medium text-center">Цена</div>
                    <div className="col-span-2 font-medium text-center">Количество</div>
                    <div className="col-span-2 font-medium text-right">Сумма</div>
                  </div>
                  
                  {items.map(item => (
                    <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-b items-center">
                      {/* Товар */}
                      <div className="col-span-6 flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.brand}</p>
                        </div>
                      </div>
                      
                      {/* Цена */}
                      <div className="col-span-2 text-center">
                        <span className="sm:hidden inline-block mr-2 font-medium">Цена:</span>
                        {item.price.toLocaleString()} ₽
                      </div>
                      
                      {/* Количество */}
                      <div className="col-span-2">
                        <div className="flex items-center justify-center">
                          <button 
                            className="p-1 rounded-l border border-gray-300 text-black"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-1 border-t border-b border-gray-300">
                            {item.quantity}
                          </span>
                          <button 
                            className="p-1 rounded-r border border-gray-300 text-black"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Сумма */}
                      <div className="col-span-2 text-right flex justify-between sm:justify-end items-center">
                        <span className="sm:hidden inline-block mr-2 font-medium">Сумма:</span>
                        <div className="flex items-center gap-3">
                          <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
                          <button 
                            className="text-gray-500 hover:text-red-500"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Сводка заказа */}
              <div className="w-full lg:w-80">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                  <h2 className="text-xl font-bold mb-4">Сводка заказа</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Товары ({items.length}):</span>
                      <span>{totalPrice.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Итого:</span>
                      <span>{totalPrice.toLocaleString()} ₽</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-black hover:bg-gray-800" asChild>
                    <Link to="/checkout">Оформить заказ</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
