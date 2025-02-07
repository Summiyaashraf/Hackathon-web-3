"use client";

import { createContext, useState, ReactNode } from "react";

// Product Interface
interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  images?: Array<{
    _id: string;
    asset: {
      _type: string;
      url: string;
    };
  }>;
}

// CartContext Interface
interface CartContextType {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  cartItems: Product[];
  addProduct: (product: Product, quantity: number) => void;
  toggleCartItemQty: (id: string, value: "plus" | "minus") => void;
  totalPrice: number;
  totalQuantity: number;
  onRemove: (product: Product) => void;
}

// Default Context Values
export const CartContext = createContext<CartContextType | null>(null);

// Cart Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Increase Quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // Decrease Quantity
  const decQty = () => {
    setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  };

  // Add Product to Cart
  const addProduct = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    setTotalQuantity((prev) => prev + quantity);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) =>
        cartProduct._id === product._id
          ? { ...cartProduct, quantity: cartProduct.quantity + quantity }
          : cartProduct
      );
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  // Toggle Cart Item Quantity
  const toggleCartItemQty = (id: string, value: "plus" | "minus") => {
    const index = cartItems.findIndex((product) => product._id === id);
    if (index === -1) return;

    const updatedCartItems = [...cartItems];
    const foundProduct = updatedCartItems[index];

    if (value === "plus") {
      updatedCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantity((prevTotalQty) => prevTotalQty + 1);
    } else if (value === "minus" && foundProduct.quantity > 1) {
      updatedCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
      setTotalQuantity((prevTotalQty) => prevTotalQty - 1);
    }

    setCartItems(updatedCartItems);
  };

  // Remove Product from Cart
  const onRemove = (product: Product) => {
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice((prevTotal) => prevTotal - product.price * product.quantity);
    setTotalQuantity((prevTotalQty) => prevTotalQty - product.quantity);
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        qty,
        incQty,
        decQty,
        cartItems,
        addProduct,
        toggleCartItemQty,
        totalPrice,
        totalQuantity,
        onRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
