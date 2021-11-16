import { Link } from "react-router-dom";

const divStyle = {
  width: '18rem'
};


const ItemList = ({categorias}) => {
  console.log("soy itemlist" + {categorias})
  
  return( 
    <>
    <ul class="cards">

    
    {categorias.map((categorias) => ( 
      <>
      <li>
        <a href="" class="card">
          <img src={categorias.imagen} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
              <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
              <div class="card__header-text">
                <h3 class="card__title">{categorias.categoria}</h3>            
                <Link to={`/categoria/${categorias.categoria}`}  class="card__status" >Ver los productos</Link>
               
              </div>
            </div>
            <p class="card__description">{categorias.descripcion}</p>
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
