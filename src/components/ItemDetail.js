import ItemCounter from './ItemCounter';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';


const divStyle = {
  width: '18rem'
};


const ItemDetail = ({productos}) => {
  
  //console.log("soy item detail" + productos.id);
  return(
    <>      
      {productos.map((productos) => ( 
         
      <>
      <div class="col-lg-12 text-center">		
        <div className="card" style={divStyle}> 
          <img src={productos.imagen} className="card-img-top" width="200"></img>
            <div className="card-body">
              <h2 className="card-title">{productos.nombre}</h2>
              <p className="card-text">{productos.descripcion} Valor:{productos.precio} </p>
              <Link to="">Ver Más</Link>
              <ItemCounter>
              </ItemCounter>
            </div>
        </div>
      </div>
      </>
      ))}
      
    </>
  )
}


export default ItemDetail;

