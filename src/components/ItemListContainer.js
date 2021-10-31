import ItemList from "./ItemList";
import {useEffect} from "react";


const ItemListContainer = () => {

const productos = [
  { nombre: "Torta Zanahoria", precio: "$10.000", descripcion: "Torta con harina de avena y zanahoria" },
  { nombre: "Torta Chocolate", precio: "$20.000", descripcion: "Torta con chocolate sin azucares añadidos" }
]

  useEffect(()=>{
    const promesa = new Promise((res,rej)=>{
  
      setTimeout(()=>{
          res([productos])
      },2000)
  
    })
  
    promesa.then((producto)=>{  console.log(producto)  
    const listaProductos = JSON.stringify(producto);
    console.log(listaProductos)
    })
  
    promesa.catch(()=>{  console.log("Termino la promesa mal")  })
  })
  
  
  return(
    <>
      <ItemList productos={productos}>
      
      </ItemList>
      
    </>
  )
}


export default ItemListContainer;
