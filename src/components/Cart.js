import { useContext } from "react"
import { contexto } from "./CartContext"

const Cart = () => {
  const {cart} = useContext(contexto)
  console.log("soy el Cart"+ JSON.stringify({cart}))
  
  return(
    <>
      {cart.map((item) =>
      
        <article>
          <h2 key ="{item.id}"></h2>
          <h2>id={item.productos[0].id}</h2>
          <h2>Nombre={item.productos[0].nombre}</h2>
          <h2>Precio={item.productos[0].precio}</h2>
          <h2>cantidad ={item.cantidad}</h2>
        </article>
      )}
    </>
  )
}


export default Cart;
