import ItemDetail from "./ItemDetail";
import {useEffect} from "react";
import { useState } from "react";
import { useParams } from 'react-router'
import { firestore } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./estilos.css";


const ItemDetailContainer = () => {
const {id} = useParams()  
console.log("soy id detail" + id)
const [productos, setProductos] = useState([]);

useEffect(()=>{
  const db = firestore

  const q = query(collection(db, "Producto"), where("seccion", "==", id));
  const promesa =   getDocs(q);

  
  promesa
    .then((documento)=>{
       
      const data =  documento.docs.map(doc => ({...doc.data(), id:doc.id}));
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
