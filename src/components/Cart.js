import { useContext, useState } from "react"
import { contexto } from "./CartContext"
import { firestore } from "./firebase";
import { collection, doc, addDoc } from 'firebase/firestore';
import { Link } from "react-router-dom";


const Cart = () => {
  const {cart, removeItem, elimCart} = useContext(contexto)
  const [id, setId] = useState('')
 
  //Calculo Total
  const totalArr = []
  let total = 0;
  cart.forEach(item => {
    totalArr.push(item.totalProduc)
    total = total + item.totalProduc;
  })

  
  let today = new Date(),
  date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

  const finalizarCompra = () => {    
    const usuario = {
      nombre: "Juan",
      email: "email@test.com",
      telefono: "123456789",
    }

    
    const db = firestore
    const promesa =  addDoc(collection(db, "Pedido"), {
      comprador: usuario,
      productos: cart,
      total: total,
      fecha : date
    });

    
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
    if (cart.length > 0){
      return(
        <>
        <div className="container">
          <div className="window">
            <div className='order-info'>
              <div className='order-info-content'>
                <h2>Resumen de Compra</h2>
                
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
                            Total $ {item.totalProduc} 
                            <br></br>
                            <button class='pay-btn-elimProd' onClick={()=>removeItem(item.productos[0].id)}>Eliminar Producto</button>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>    
                  </>
                  ))}
                <div class='line'></div>
                  <div class='total'>
                      <span id="totalSpan">
                          <div class='thin dense'><h1>Total: ${total}</h1>
                          </div>
                      </span>
                  </div><br></br><br></br>  <br></br>
                  <button class='pay-btn' onClick={finalizarCompra}>Finalizar Compra</button>
                  <button class='pay-btn' >Seguir Comprando</button>
                  <button class='pay-btn' onClick={()=>elimCart()} >Eliminar Compra</button>
              </div>
            </div>
          </div>
          </div>
        </>
      )

    }else{
      return(
        <>
        <div className="container">
          <div className="window">
            <div className='order-info'>
              <div className='order-info-content'>
                <h2>No hay productos en el carrito</h2>
                <Link to={`/productos`}  className="card__status" >Ver los productos</Link>
              </div>
            </div>
          </div>
        </div>
        
        </> 
        )
    }    
  }
}


export default Cart;
