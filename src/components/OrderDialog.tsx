import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OrderDialog: React.FC<OrderDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl mb-2">Спасибо за заказ!</DialogTitle>
        </DialogHeader>
        
        <div className="text-center">
          <p className="mb-4">Для завершения оформления заказа, пожалуйста, свяжитесь с нашими менеджерами:</p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <a 
              href="https://t.me/inadache" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVsZWdyYW0lMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60" 
                alt="Telegram" 
                className="w-12 h-12 rounded-full mb-2"
              />
              <span className="text-sm">@inadache</span>
            </a>
            
            <a 
              href="https://t.me/Narakame" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVsZWdyYW0lMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60" 
                alt="Telegram" 
                className="w-12 h-12 rounded-full mb-2"
              />
              <span className="text-sm">@Narakame</span>
            </a>
          </div>
          
          <p className="text-sm text-gray-600">
            Менеджер свяжется с вами для подтверждения заказа и уточнения деталей доставки.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
