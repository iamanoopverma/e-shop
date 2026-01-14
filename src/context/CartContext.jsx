import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(id, product = null) {
        if (!product) {
            setCart(prev => prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
        }
        else {
            const item = {
                id: product.id,
                title: product.title,
                price: product.price,
                qty: 1,
                image: product.image
            }
            setCart(prev => [...prev, item]);
        }
    }

    function removeFromCart(id) {
        setCart(prev => prev.filter(item => item.id !== id));
    }

    function decreaseProductQty(id) {
        const foundElement = cart.find(item => item.id === id);
        if (foundElement.qty > 1) {
            setCart(prev => prev.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item));
        }
        else {
            removeFromCart(id);
        }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseProductQty }}>
            {children}
        </CartContext.Provider>
    );

}

export function useCart() {
    return useContext(CartContext);
}