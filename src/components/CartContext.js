import { Children, createContext } from "react";
import { useState } from "react";

export const contexto  = createContext();
const {Provider, Consumer} = contexto


const CartContext = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productos, cantidad) =>{
    console.log("Soy el contexto")
    console.log(productos, cantidad)
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
