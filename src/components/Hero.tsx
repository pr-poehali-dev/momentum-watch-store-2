import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Logo />
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Время выбирать лучшее
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          Интернет-магазин качественных реплик популярных часовых брендов 
          с доставкой по Луганску и области
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Button 
            className="bg-black hover:bg-gray-800 text-lg px-8 py-6" 
            asChild
          >
            <Link to="/catalog">Смотреть каталог</Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-black hover:bg-gray-100 text-lg px-8 py-6"
            asChild
          >
            <Link to="#about">О магазине</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
