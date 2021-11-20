import ItemList from "./ItemList";
import {useEffect} from "react";
import { useState } from "react";
import { firestore } from "./firebase";
import { useParams } from "react-router";
import { collection, getDocs } from 'firebase/firestore';
import "./estilos.css";

const ItemListContainer = () => {
  const {id} = useParams()
  
  const [categorias, setCategorias] = useState([]);
 
  useEffect(()=>{
    const db = firestore
    const tabla = collection(db, 'Categoria');
  
    const promesa =  getDocs(tabla);

    promesa
      .then((documento)=>{
       
         const data =  documento.docs.map(doc => ({...doc.data(), id:doc.id}));
        
        setCategorias(data)
        console.log(data)
      })
      .catch(()=>{

      })
    },[id])
 
  return(
    <>
      <ItemList categorias={categorias}>
      
      </ItemList>
      
    </>
  )
}
export default ItemListContainer;
