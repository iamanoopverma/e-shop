import {createContext, useContext, useState } from 'react';

const CartContext = createContext();
export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function addToCart(product){
       if(cart.some(item => Object.values(item)[0] === product.id)){
           setCart(cart.map(item => item.id === product.id ? {...item, qty:qty+1} : true));
       }
       else{
        const item = {
            id: product.id,
            title: product.title,
            price: product.price,
            qty: 1
        }
        setCart(prev => [...prev,item]);
       }
    }

    function removeFromCart(id) {
        setCart(prev => prev.filter(item => item.id !== id));
    }
    
    function decreaseProductQty(id) {
        if (cart.some(item => Object.value(item)[3] > 1)) {
            setCart(prev => prev.map(item => item.id === id ? { ...item, qty: qty - 1 } : true));
        }
        else {
            removeFromCart(id);
        }
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, decreaseProductQty}}>
            {children}
        </CartContext.Provider>
    );

}

export function useCart(){
    return useContext(CartContext);
}