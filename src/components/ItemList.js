import { Link } from "react-router-dom";

const divStyle = {
  width: '18rem'
};


const ItemList = ({categorias}) => {
  console.log("soy itemlist" + {categorias})
  
  return( 
    <>
    {categorias.map((categorias) => ( 
         
         <>
         <div class="col-lg-12 text-center">		
           <div className="card" style={divStyle}> 
             <img src={categorias.imagen} className="card-img-top" width="200"></img>
               <div className="card-body">
                 <h2 className="card-title">{categorias.categoria}</h2>
                 <p className="card-text">{categorias.descripcion}</p>
                 
                 <Link to={`/categoria/${categorias.categoria}`} >Ver los productos</Link>
              
                
                 
               </div>
           </div>
         </div>
         </>
         ))}
    
    </>
  )
}


export default ItemList;
