import { useContext, useState } from "react"
import { contexto } from "./CartContext"
import { firestore } from "./firebase";
import { collection, doc, addDoc } from 'firebase/firestore';

const Cart = () => {
  const {cart} = useContext(contexto)

  const [id, setId] = useState('')

  const finalizarCompra = () => {

    const usuario = {
      nombre: "Juan",
      email: "email@test.com",
      telefono: "123456789",
    }
    

    
    const db = firestore
    //const tabla = collection(db, 'Pedido');
    const promesa =  addDoc(collection(db, "Pedido"), {
      comprador: usuario,
      productos: cart,
      total: 1000,
    });


    //const query = doc(db, "Pedido", order)

    //const promesa = setDoc(query);
    promesa
      .then((resultado) => {
        setId(resultado.id)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  console.log("soy el Cart"+ JSON.stringify({cart}))

  if (id) {
    return (
        <div>
            <p>Tu orden se proceso con exito!</p>
            <p>Numero de Compra : #<strong>{id}</strong></p>
        </div>
    )
  } else 
  {
    return(
      <>
        {cart.map((item) =>
        
          <article>
            <h2 key ="{item.id}"></h2>
            <h2>id={item.productos[0].id}</h2>
            <h2>Nombre={item.productos[0].nombre}</h2>
            <h2>Precio={item.productos[0].precio}</h2>
            <h2>cantidad ={item.cantidad}</h2>
            <button onClick={finalizarCompra}>Finalizar Compra</button>
          </article>
          
        )}
      </>
    )
  }
}


export default Cart;
