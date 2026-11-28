"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type CartItem = { name: string; price: number; qty: number };

type CartContextType = {
  cart: Record<string, CartItem>;
  setQty: (id: string, name: string, price: number, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

// Wrap any sections that should share one cart (books + products)
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, CartItem>>({});

  const setQty = (id: string, name: string, price: number, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = { name, price, qty };
      return next;
    });
  };

  const clear = () => setCart({});

  return (
    <CartContext.Provider value={{ cart, setQty, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}