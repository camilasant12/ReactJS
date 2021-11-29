import { Children, createContext } from "react";
import { useState } from "react";
import React from "react";

export const contexto  = createContext()

export const {Provider, Consumer} = contexto

const CartContext = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalPedido, setTotalPedido] = useState([]);
  console.log(totalPedido)
  const addToCart = (productos, cantidad, precio) =>{
    
    const totalProduc = precio *cantidad
    
    let total = (parseInt(totalPedido,10) + parseInt(totalProduc,10))
    console.log(parseInt(total)+ "soy total pedixdo")
    
    const nuevoProducto = {cantidad,productos, totalProduc, totalPedido}
    console.log(totalPedido + "valor total pedido despues")
  
    console.log(totalProduc +"cart context precio")
     const arrProd = [... cart, nuevoProducto]
    setCart(arrProd)
    setTotalPedido(total)

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
