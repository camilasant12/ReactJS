import ItemDetail from "./ItemDetail";
import {useEffect} from "react";
import { useState } from "react";
import { useParams } from 'react-router'
import { firestore } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import "./estilos.css";
//import productosListado2 from "./productos.json";



const ItemDetailContainer = () => {
const {id} = useParams()

const [productos, setProductos] = useState([]);
//const productosFiltrados = productosListado2.filter(productosListado2 => productosListado2.seccion == [id]);
//console.log(productosFiltrados)
useEffect(()=>{
  const db = firestore
  const query =  doc(db, "Producto", id);
  
  
  const promesa =  getDoc(query)

  promesa
    .then((documento)=>{
       
      const data =  documento.doc.map(doc => doc.data());
      console.log("exitoso")
      console.log (data)
      setProductos(data)
    })
    .catch(()=>{
    })
  },[id])
 
  
  
  return(
    <>
      <ItemDetail productos={productos} >
      
      </ItemDetail>
      
    </> 
  )
}


export default ItemDetailContainer;
