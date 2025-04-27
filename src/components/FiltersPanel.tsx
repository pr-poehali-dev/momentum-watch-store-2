import React, { useState, useEffect } from 'react';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { brands, priceRanges } from '../data/watches';

interface FiltersPanelProps {
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: { min: number; max: number };
  setPriceRange: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>;
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({
  selectedBrands,
  setSelectedBrands,
  priceRange,
  setPriceRange
}) => {
  const [sliderValue, setSliderValue] = useState<[number, number]>([priceRanges.min, priceRanges.max]);

  useEffect(() => {
    setPriceRange({ min: sliderValue[0], max: sliderValue[1] });
  }, [sliderValue, setPriceRange]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  return (
    <div className="w-full md:w-64 bg-white p-4">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Фильтры</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Бренды</h3>
        <div className="space-y-2">
          {brands.map(brand => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox 
                id={`brand-${brand}`} 
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
              />
              <Label 
                htmlFor={`brand-${brand}`}
                className="text-sm cursor-pointer"
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3">Цена</h3>
        <div className="px-2">
          <Slider
            defaultValue={[priceRanges.min, priceRanges.max]}
            max={priceRanges.max}
            min={priceRanges.min}
            step={100}
            value={sliderValue}
            onValueChange={setSliderValue}
            className="my-4"
          />
          <div className="flex justify-between text-sm">
            <span>{sliderValue[0]} ₽</span>
            <span>{sliderValue[1]} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
