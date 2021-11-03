import ItemDetail from "./ItemDetail";
import {useEffect} from "react";



const ItemDetailContainer = () => {

const productos = [
  { nombre: "Torta de Zanahoria", precio: "$10.000", descripcion: "Torta con harina de avena y zanahoria", imagen: "./img/zanahoria.png" },
  { nombre: "Torta de Chocolate", precio: "$20.000", descripcion: "Torta con chocolate sin azucares añadidos", imagen: "./img/chocolate.jpg" },
  { nombre: "Torta Red Velvet", precio: "$20.000", descripcion: "Torta red velvet sin azucares añadidos", imagen: "./img/chocolate.jpg" }
]

  useEffect(()=>{
    const getItem = new Promise((res,rej)=>{
  
      setTimeout(()=>{
          res([productos])
      },2000)
  
    })
  
    getItem.then((producto)=>{  console.log(producto)  
    const listaProductos = JSON.stringify(producto);
    console.log(listaProductos)
    })
  
    getItem.catch(()=>{  console.log("Termino la promesa mal")  })
  })
  
  
  return(
    <>
      <ItemDetail productos={productos}>
      
      </ItemDetail>
      
    </>
  )
}


export default ItemDetailContainer;
