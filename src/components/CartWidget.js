import { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from 'react-router-dom';




const CartWidget = () => {
  const {cart} = useContext(contexto) 

  
  return(
    <>
      <span className="material-icons">
		    shopping_cart  
	    </span>
      <Link to={`/cart/`} className="card__status" ><p className="lengthCart">{cart.length}</p>
      </Link>
  
    </>
  )
}


export default CartWidget;
