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
        <div className="card">
          <div className="header">
              <div className="icon">
              <img   src={productoFiltrado.imagen}  />
              <a href="#"><i className="fa fa-heart-o"></i></a>
              </div>
          </div>
          <div className="text">
              <h1 className="food">
              {productoFiltrado.nombre}
              </h1>
              <i className="fa fa-clock-o"> Precio</i>
              <i className="fa fa-users"> {productoFiltrado.precio}</i>
              
              
              <p className="info">{productoFiltrado.descripcion}</p>
          </div>
          <ItemCounter onAdd={onAdd}></ItemCounter>
          
          
        </div>
         
              
         </>
         ))}
    </>
  )
}


export default Item;
