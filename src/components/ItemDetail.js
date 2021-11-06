import ItemCounter from './ItemCounter';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';


const divStyle = {
  width: '18rem'
};


const ItemDetail = ({productos}) => {
  
  const onAdd = (cantidad) => {
    console.log("Seleccionaron la cantidad: " +cantidad)
  
  }

  return(
    <>      
      {productos.map((productos) => ( 
         
      <>
        <div>
          <img src={productos.imagen} width="200"></img>
          <h2 className="card-title">{productos.nombre}</h2>
          <p className="card-text">{productos.descripcion} Valor:{productos.precio} </p>
          <Link to="">Ver Más</Link>
          <ItemCounter onAdd={onAdd}></ItemCounter>
        </div>  
           
      </>
      ))}
      
    </>
  )
}


export default ItemDetail;

