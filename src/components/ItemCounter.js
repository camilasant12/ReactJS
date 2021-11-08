import {useState} from "react";
const ItemCounter = ({onAdd}) => {
  let [contador, nuevoContador] = useState(0);
  
  const contadorAument = () =>{
    contador ++;
    console.log(contador);
    nuevoContador(contador)
  }

  const contadorRest = () =>{
    contador --;
    console.log(contador);
    nuevoContador(contador)
  }

  const confirmar = () => {
    onAdd(contador)
  }

  return(
    <>
        
    <button id="minus-btn" onClick={contadorRest}> - </button>
    <input type="number"  value={contador} min="1"></input>
    <button id="plus-btn" onClick={contadorAument}> + </button>
    <button onClick={ confirmar }>Añadir al Carrito</button>
                   
        
    </>
  )
}


export default ItemCounter;
