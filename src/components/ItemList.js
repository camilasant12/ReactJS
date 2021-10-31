import ItemCounter from './ItemCounter';
import zanahoria from './img/zanahoria.png';


const divStyle = {
  width: '18rem'
};


const ItemList = ({productos}) => {
  
  
  return(
    <>
    
    <div className="users">
      
    </div>
    
      <div className="card" style={divStyle}>
        {productos.map((productos) => (
        <>
        <img src={zanahoria} className="card-img-top"></img>
          <div className="card-body">
            <h2 className="card-title">{productos.nombre}</h2>
            <p className="card-text">{productos.descripcion} Valor:{productos.precio} </p>
            <a href="#" className="btn btn-primary">Ver Más</a>
            <ItemCounter></ItemCounter>
          </div></>
      ))}
      </div>
    </>
  )
}


export default ItemList;
