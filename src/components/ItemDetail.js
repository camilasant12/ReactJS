import ItemCounter from './ItemCounter';
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';
import { useContext } from 'react';



const ItemDetail = ({productos}) => {
  
  const {addToCart} = useContext(contexto)
  
  const onAdd = (cantidad) => {
    console.log("Seleccionaron la cantidad: " +cantidad)
    addToCart(productos, cantidad)
  }

  return(
    <>      
      {productos.map((productos) => ( 
         
      <>
        <div>
          <img src={productos.imagen} width="200"></img>
          <h2 className="card-title">{productos.nombre}</h2>
          <p className="card-text">{productos.descripcion} Valor:{productos.precio} </p>
          <Link to={`/categoria/${productos.seccion}/${productos.id}`} >Ver Más</Link>
          <ItemCounter onAdd={onAdd}></ItemCounter>
        </div>  
           
      </>
      ))}
      
    </>
  )
}


export default ItemDetail;

