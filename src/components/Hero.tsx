import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Время выбирать лучшее
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md">
                Первый в Луганске специализированный интернет-магазин качественных реплик популярных часовых брендов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-white bg-black hover:bg-gray-800">
                  <Link to="/catalog">Перейти в каталог</Link>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Logo />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
