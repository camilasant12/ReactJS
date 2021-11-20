import { Link } from "react-router-dom";


const ItemList = ({categorias}) => {
  console.log("soy itemlist" + {categorias})
  
  return( 
    <>
    <ul class="cards">

    
    {categorias.map((categorias) => ( 
      <>
      <li>
        <a href="" className="card">
          <img src={categorias.imagen} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
              <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
              <div className="card__header-text">
                <h3 className="card__title">{categorias.categoria}</h3>            
                <Link to={`/categoria/${categorias.id}`}  className="card__status" >Ver los productos</Link>
               
              </div>
            </div>
            <p className="card__description">{categorias.descripcion}</p>
          </div>         
        </a>
      </li>
      </>
    ))}
    </ul>
    </>
  )
}


export default ItemList;
