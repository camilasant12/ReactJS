import ItemList from "./ItemList";
import {useEffect} from "react";
import { useState } from "react";
import { useParams } from 'react-router'
import "./estilos.css"



const ItemListContainer = () => {

let {id} = useParams()
const categoriasListado = [
  { categoria: "Tortas",  descripcion: "Las Mejores Tortas Para Tu Paladar", imagen: "/img/tortas.png" },
  { categoria: "Cumpleaños",  descripcion: "Lo Mejor, Para Las Mejores Fechas", imagen: "/img/cumpleaños.png" },
  { categoria: "Especiales",  descripcion: "Nuestras Mejores Creaciones", imagen: "/img/especiales.png" },
  { categoria: "Cupakes",  descripcion: "Nuestras Mejores Creaciones", imagen: "/img/cupcakes.png" },
]
  const [categorias, setCategorias] = useState([]);
 

  useEffect(()=>{
    const promesaCategorias = new Promise((res,rej)=>{
  
      setTimeout(()=>{
          res([categoriasListado])
          const jsonCategorias = JSON.stringify(categoriasListado);
          setCategorias(jsonCategorias)
          console.log("soy itemlist container" +categorias)
      },2000)
  
    });

    promesaCategorias.catch(()=>{  console.log("Termino la promesa mal")  })
  },{id})
 
  return(
    <>
      <ItemList categorias={categoriasListado}>
      
      </ItemList>
      
    </>
  )
}


export default ItemListContainer;
