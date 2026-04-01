import { create } from 'zustand';
import { Product } from './types';
import { StateCreator } from 'zustand';

type CartItem = Product & { 
  quantity: number 
};

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  getTotalCount: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartState>()(
  (set, get): CartState => ({
    items: [],
    addItem: (product) => {
      const items = get().items;
      const existing = items.find(item => item.id === product.id);
      if (existing) {
        set({
          items: items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      } else {
        set({
          items: [...items, { ...product, quantity: 1 }],
        });
      }
    },
    getTotalCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
    getTotalPrice: () => get().items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
  })
);
