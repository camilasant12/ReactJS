import { contexto } from './CartContext';
import { useContext } from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import productosListado2 from "./productos.json";
import ItemCounter from './ItemCounter';
import './estilos.css'



const Item = () => {
  const {id2} = useParams()


  const [producto, setProducto] = useState([]);
  const productoFiltrado = productosListado2.filter(productosListado2 => productosListado2.id == [id2]);

  const {addToCart} = useContext(contexto)
  
  const onAdd = (cantidad) => {
   
    addToCart(producto, cantidad)
  }

  useEffect(() => {
    const promesaProducto = new Promise((res, rej) => {
      setTimeout(() => {
        res([productoFiltrado]);
        setProducto(productoFiltrado);
      }, 2000);
    });
    promesaProducto.catch(() => {
      console.log("Termino la promesa mal");
    });
  }, [id2]);
 
  return(
    <>
    

      {productoFiltrado.map((productoFiltrado) => ( 
         
      <>
      <div className="wrapper">
        <div className="product-img">
          <img src={productoFiltrado.imagen} height="420" width="327"/>
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{productoFiltrado.nombre}</h1>
            <h2>By  {productoFiltrado.seccion}</h2>
            <p>{productoFiltrado.descripcion}</p>
          </div>
          <div className="product-price-btn">
            <p><span>$</span>{productoFiltrado.precio}</p>
            
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
