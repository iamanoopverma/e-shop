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
    

    return(
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );

}

export function useCart(){
    return useContext(CartContext);
}