import { Children, createContext } from "react";
import { useState } from "react";
import React from "react";

export const contexto  = createContext()

export const {Provider, Consumer} = contexto

const CartContext = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productos, cantidad) =>{
    
    const nuevoProducto = {cantidad,productos}
    const arrProd = [nuevoProducto]
   
    setCart(arrProd)
  }

  const valorCarrito ={
    cart : cart,
    addToCart : addToCart
  }
  return(
    <>
     <Provider value={valorCarrito}>
        {children}
     </Provider>
    </>
  )
}


export default CartContext;
