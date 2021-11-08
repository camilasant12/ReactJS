import { contexto } from './CartContext';
import { useContext } from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import productosListado2 from "./productos.json";
import ItemCounter from './ItemCounter';




const Item = () => {
  const {id2} = useParams()
  console.log("soy " +[id2])

  const [producto, setProducto] = useState([]);
  const productoFiltrado = productosListado2.filter(productosListado2 => productosListado2.id == [id2]);

  const {addToCart} = useContext(contexto)
  
  const onAdd = (cantidad) => {
    console.log("Seleccionaron la cantidad: " +cantidad)
    addToCart(producto, cantidad)
  }

  useEffect(()=>{
    const promesaProducto = new Promise((res,rej)=>{
    
      setTimeout(()=>{
        res([productoFiltrado])
        
        const jsonProducto = JSON.stringify(productoFiltrado);
        setProducto(jsonProducto)
        
    },2000)

    
    })
  
    promesaProducto.catch(()=>{  console.log("Termino la promesa mal")  })
  },[id2])
 
  return(
    <>
      {productoFiltrado.map((productoFiltrado) => ( 
         
         <>
           <div>
             <img src={productoFiltrado.imagen} width="200"></img>
             <h2 className="card-title">{productoFiltrado.nombre}</h2>
             <p className="card-text">{productoFiltrado.descripcion} Valor:{productoFiltrado.precio} </p>
             
             <ItemCounter onAdd={onAdd}></ItemCounter>
           </div>  
              
         </>
         ))}
    </>
  )
}


export default Item;
