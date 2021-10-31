import {useState} from "react";
const ItemCounter = () => {
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
  return(
    <>
        <div className="container mt-5">
          <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <button className="btn btn-dark btn-sm" id="minus-btn" onClick={contadorRest}>
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input type="number" id="qty_input" className="form-control form-control-sm" value={contador} min="1"></input>
                    <div className="input-group-prepend">
                      <button className="btn btn-dark btn-sm" id="plus-btn" onClick={contadorAument}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        
    </>
  )
}


export default ItemCounter;
