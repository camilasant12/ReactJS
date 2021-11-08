import ItemDetail from "./ItemDetail";
import {useEffect} from "react";
import { useState } from "react";
import { useParams } from 'react-router'
import productosListado2 from "./productos.json";



const ItemDetailContainer = () => {
const {id} = useParams()
console.log("soy " +[id])

const [productos, setProductos] = useState([]);
const productosFiltrados = productosListado2.filter(productosListado2 => productosListado2.seccion == [id]);
console.log(productosFiltrados)
  useEffect(()=>{
    const promesaProductos = new Promise((res,rej)=>{
    
      setTimeout(()=>{
        res([productosFiltrados])
        
        const jsonProductos = JSON.stringify(productosFiltrados);
        setProductos(jsonProductos)
        console.log("soy itemlist container" + productos)
    },2000)

  
    })
  
    promesaProductos.catch(()=>{  console.log("Termino la promesa mal")  })
  },[id])
  
 
  
  
  return(
    <>
      <ItemDetail productos={productosFiltrados} >
      
      </ItemDetail>
      
    </> 
  )
}


export default ItemDetailContainer;
