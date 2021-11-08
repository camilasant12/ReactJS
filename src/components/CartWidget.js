import { useContext } from "react"
import { contexto } from "./CartContext"


const CartWidget = () => {
  const {cart} = useContext(contexto)
  return(
    <>
      <span className="material-icons">
		shopping_cart  
	 </span>
   {cart}
    </>
  )
}


export default CartWidget;
