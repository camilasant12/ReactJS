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
    <div className="itemCounter">
      <button  onClick={contadorRest}> - </button>
      <input type="number"  value={contador} min="1"></input>
      <button  onClick={contadorAument}> + </button>
      <button  onClick={ confirmar }>AÑADIR AL CARRITO </button>
    </div>
    
    
   
    
                   
        
    </>
  )
}


export default ItemCounter;
