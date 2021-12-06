import { Children, createContext } from "react";
import { useState } from "react";
import React from "react";

export const contexto  = createContext()

export const {Provider, Consumer} = contexto

const CartContext = ({children}) => {
  const [cart, setCart] = useState([]);

  console.log("cartcontext long" + cart.length)
  const addToCart = (productos, cantidad, precio) =>{

    const totalProduc = precio *cantidad
    const nuevoProducto = {productos,cantidad, totalProduc}
    const arrProd = [... cart, nuevoProducto] 
    setCart(arrProd)
    
  }

  const elimCart = () =>{
    setCart([]);
  }

  const removeItem = (itemId) => {
    let arrRemove = cart.filter(cart => cart.productos[0].id != itemId);
    setCart(arrRemove);
  }


  const valorCarrito ={
    cart : cart,
    addToCart  : addToCart,
    elimCart   : elimCart,
    removeItem : removeItem
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
