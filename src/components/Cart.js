import { useContext, useState } from "react"
import { contexto } from "./CartContext"
import { firestore } from "./firebase";
import { collection, doc, addDoc } from 'firebase/firestore';
import Total from "./Total";
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
      <div className="container">
        <div className="window">
          <div className='order-info'>
            <div className='order-info-content'>
              <h2>Order Summary</h2>
              
              {cart.map((item) => ( 
                
                <>
                
                <div class='line'></div>
                <table class='order-table'>
                  <tbody>
                    <tr>
                      <td><img src={item.productos[0].imagen} class='full-width'></img>
                      </td>
                      <td>
                        <br/> <span class='thin'><h1>{item.productos[0].nombre}</h1></span><br/>
                        <span class='thin small'>Cantidad {item.cantidad}<br/><br/></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class='price'>Precio Unitario ${item.productos[0].precio}<br></br>
                        Total $ {item.total} </div>
                      </td>
                    </tr>

                  </tbody>
                </table>    
                </>
                ))}
                <Total></Total>
            </div>
          </div>
          
        
          <div class='credit-info'>
          <div class='credit-info-content'>
            <table class='half-input-table'>
              <tr><td>Please select your card: </td><td><div class='dropdown' id='card-dropdown'><div class='dropdown-btn' id='current-card'>Visa</div>
                <div class='dropdown-select'>
                <ul>
                  <li>Master Card</li>
                  <li>American Express</li>
                  </ul></div>
                </div>
               </td></tr>
            </table>
            <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' class='credit-card-image' id='credit-card-image'></img>
            Card Number
            <input class='input-field'></input>
            Card Holder
            <input class='input-field'></input>
            <table class='half-input-table'>
              <tr>
                <td> Expires
                  <input class='input-field'></input>
                </td>
                <td>CVC
                  <input class='input-field'></input>
                </td>
              </tr>
            </table>
            <button class='pay-btn'>Checkout</button>

          </div>
        </div>
        </div>
      </div>
      </>
    )
          
  }
}


export default Cart;
