import ItemCounter from './ItemCounter';
import zanahoria from './img/zanahoria.png';
import chocolate from './img/chocolate.jpg';


const divStyle = {
  width: '18rem'
};


const ItemDetail = ({productos}) => {
  const imagen =productos.imagen;
  console.log({imagen});
  return(
    <>      
      {productos.map((productos) => ( 
         
      <>
      <div class="col-lg-12 text-center">		
        <div className="card" style={divStyle}> 
          <img src={zanahoria} className="card-img-top"></img>
            <div className="card-body">
              <h2 className="card-title">{productos.nombre}</h2>
              <p className="card-text">{productos.descripcion} Valor:{productos.precio} </p>
              <a href="#" className="btn btn-primary">Ver Más</a>
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

