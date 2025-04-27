import React from 'react';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
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
  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange({ min, max });
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
        <div className="space-y-2">
          {priceRanges.map(range => (
            <div key={range.id} className="flex items-center space-x-2">
              <Checkbox 
                id={`price-${range.id}`} 
                checked={priceRange.min === range.min && priceRange.max === range.max}
                onCheckedChange={() => handlePriceRangeChange(range.min, range.max)}
              />
              <Label 
                htmlFor={`price-${range.id}`}
                className="text-sm cursor-pointer"
              >
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
