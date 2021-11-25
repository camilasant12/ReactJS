import { Link } from 'react-router-dom';



const ItemDetail = ({productos}) => {


  return( 
    <>
    <ul class="cards">      
      {productos.map((productos) => ( 
         
      <>
      <li>
        <a href="" className="card">
          <img src={productos.imagen} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
              <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
              <div className="card__header-text">
                <h3 className="card__title">{productos.nombre}</h3>    
                <Link to={`/categoria/${productos.seccion}/${productos.nombre}`} className="card__status" >Ver más</Link>
              </div>
            </div>
            <p className="card__description">{productos.descripcion}</p>
            <p className="card__description">Precio:{productos.precio}</p>
          </div>
        </a>
      </li>
      </>
      ))}
    </ul>
    </>
  )
}


export default ItemDetail;

