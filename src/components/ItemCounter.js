import {useState} from "react";
import "./estilos.css";

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
    

    <div className="counter">
      <hr className="main-hr" />
      
      <input type="number" value={contador} min="1" className="valorCounter"></input>
      
      <button onClick={contadorAument} className="icon-btn add-btn">
        <div className="add-icon"></div>
        <div className="btn-txt">Add</div>
      </button>
      <button onClick={contadorRest} className="icon-btn add-btn">  
        <div className="btn-txt">Remove</div>
      </button>
      
      <button type="button" onClick={ confirmar }>buy now</button>
      
     
      
      
    </div>
    
    
   
    
                   
        
    </>
  )
}


export default ItemCounter;
