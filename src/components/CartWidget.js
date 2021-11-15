import { useContext } from "react"
import Cart from "./Cart"
import { contexto } from "./CartContext"



const CartWidget = () => {
  const {cart} = useContext(contexto)

  
  return(
    <>
      <span className="material-icons">
		    shopping_cart  
	    </span>
     <p>{cart.length}</p>
     <Cart></Cart>
  
    </>
  )
}


export default CartWidget;
