import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
            <p className="mb-2">Город Луганск</p>
            <p className="mb-2">Телефон: +7(959)1398715</p>
            <p className="mb-2">Телефон: +7(959)1526836</p>
            <div className="flex items-center mb-2">
              <span>Telegram:</span>
              <a href="https://t.me/inadache" className="ml-2 hover:underline">@inadache</a>
            </div>
            <div className="flex items-center">
              <span>Telegram:</span>
              <a href="https://t.me/Narakame" className="ml-2 hover:underline">@Narakame</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">О магазине</h3>
            <p className="mb-2">Momentum - первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов.</p>
            <p>Мы предлагаем широкий выбор часов по доступным ценам с быстрой доставкой по Луганску и области.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul>
              <li className="mb-2"><a href="/catalog" className="hover:underline">Каталог</a></li>
              <li className="mb-2"><a href="/cart" className="hover:underline">Корзина</a></li>
              <li className="mb-2"><a href="/delivery" className="hover:underline">Доставка</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Momentum. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
