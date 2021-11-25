import { contexto } from './CartContext';
import { useContext } from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import ItemCounter from './ItemCounter';
import { firestore } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";



const Item = () => {
  const {id2} = useParams()
  const [producto, setProducto] = useState([]);
  const {addToCart} = useContext(contexto)
  console.log("soy id2"+id2);

  const onAdd = (cantidad) => {
    addToCart(producto, cantidad)
  }

  useEffect(() => {
    const db = firestore

    const q = query(collection(db, "Producto"), where("nombre", "==", id2));
    const promesa =   getDocs(q);

    promesa
    .then((documento)=>{ 
       
      const data =  documento.docs.map(doc => ({...doc.data(), id:doc.id}));
      console.log("exitoso")
      console.log (data)
      setProducto(data);
    })
    .catch(()=>{
    })
  },[id2])

 
  return(
    <>
     {producto.map((producto) => ( 
         
         <>
         <div className="wrapper">
           <div className="product-img">
             <img src={producto.imagen} height="420" width="327"/>
           </div>
           <div className="product-info">
             <div className="product-text">
               <h1>{producto.nombre}</h1>
               <h2>By  {producto.seccion}</h2>
               <p>{producto.descripcion}</p>
             </div>
             <div className="product-price-btn">
               <p><span>$</span>{producto.precio}</p>
               
               <ItemCounter onAdd={onAdd}></ItemCounter>
             </div>
           </div>
         </div>
   
         
        
         </>
         ))}
      </>
  )
}


export default Item;
