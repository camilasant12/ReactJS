import ItemList from "./ItemList";
import {useEffect} from "react";
import { useState } from "react";
import { useParams } from 'react-router'



const ItemListContainer = () => {

let {id} = useParams()
const categoriasListado = [
  { categoria: "Tortas",  descripcion: "Las Mejores Tortas Para Tu Paladar", imagen: "/img/chocolate.jpg" },
  { categoria: "SugarFree",  descripcion: "Sección Sugar Free, para todos que quieren disfrutar del dulce y seguirse cuidando", imagen: "/img/zanahoria.png" },
  { categoria: "Ediciones Especiales",  descripcion: "Nuestras Mejores Creaciones", imagen: "/img/boda.jpg" },
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
