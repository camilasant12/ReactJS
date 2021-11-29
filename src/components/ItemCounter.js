import {useState} from "react";
import "./estilos.css";

const ItemCounter = ({onAdd, precio}) => {
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
    
    onAdd(contador, precio)
  }

  return(
    <>
   
    <input type="number" value={contador} min="1" className="valorCounter" readOnly></input>
    <div className="counter">
      <hr className="main-hr" />
      <button onClick={contadorAument} className="icon-btn add-btn">
        <div className="add-icon"></div>
        <div className="btn-txt">Agregar</div>
      </button>
      <button onClick={contadorRest} className="icon-btn add-btn">  
        <div className="btn-txt">Remover</div>
      </button>
      
      <button type="button" onClick={ confirmar }>añadir al carrito</button>
      
    </div>
    
    
   
    
                   
        
    </>
  )
}


export default ItemCounter;
