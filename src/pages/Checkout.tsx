import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/context/CartContext';
import OrderDialog from '@/components/OrderDialog';

const Checkout: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
  });
  
  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      address: '',
    };
    
    let isValid = true;
    
    if (!name.trim()) {
      newErrors.name = 'Введите ваше имя';
      isValid = false;
    }
    
    if (!phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Неверный формат номера';
      isValid = false;
    }
    
    if (deliveryMethod === 'delivery' && !address.trim()) {
      newErrors.address = 'Введите адрес доставки';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setDialogOpen(true);
    }
  };
  
  const handleDialogClose = () => {
    setDialogOpen(false);
    clearCart();
    navigate('/');
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  const totalWithDelivery = totalPrice + (deliveryMethod === 'delivery' ? 500 : 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
                {/* Контактная информация */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Контактная информация</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input 
                        id="phone" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                        className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
                
                {/* Способ доставки */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Способ доставки</h2>
                  
                  <RadioGroup 
                    value={deliveryMethod} 
                    onValueChange={setDeliveryMethod}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Самовывоз (бесплатно)</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery">Доставка курьером (+500 ₽)</Label>
                    </div>
                  </RadioGroup>
                  
                  {deliveryMethod === 'delivery' && (
                    <div className="mt-4">
                      <Label htmlFor="address">Адрес доставки</Label>
                      <Input 
                        id="address" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                        className={`mt-1 ${errors.address ? 'border-red-500' : ''}`}
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                      <p className="text-red-600 font-medium mt-2">Доставка по городу стоит 500 ₽</p>
                    </div>
                  )}
                </div>
                
                {/* Способ оплаты */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Способ оплаты</h2>
                  
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">Наличными</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Картой</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800"
                >
                  Оформить заказ
                </Button>
              </form>
            </div>
            
            {/* Сводка заказа */}
            <div className="w-full lg:w-80">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
                <h2 className="text-xl font-bold mb-4">Ваш заказ</h2>
                
                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-gray-600">
                        {item.name} x{item.quantity}
                      </span>
                      <span>{(item.price * item.quantity).toLocaleString()} ₽</span>
                    </div>
                  ))}
                  
                  {deliveryMethod === 'delivery' && (
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-600">Доставка:</span>
                      <span>500 ₽</span>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Итого:</span>
                    <span>{totalWithDelivery.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <OrderDialog 
        open={dialogOpen}
        onOpenChange={handleDialogClose}
      />
      
      <Footer />
    </div>
  );
};

export default Checkout;
