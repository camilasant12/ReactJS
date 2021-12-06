import { Link } from "react-router-dom";
import "./estilos.css";

const NavBar = () => {
  return(
    <>
    <div className="nav">
      <nav>
					<ul> 
						<li>
							<a href="..">Inicio</a>
              <span></span><span></span><span></span><span></span>
						</li>

            <li>
							<Link to="..">Nosotros</Link>
              <span></span><span></span><span></span><span></span>
						</li>
					
						<li>
							<Link to="/productos">Menu</Link>
              <span></span><span></span><span></span><span></span>
						</li>

            <li>
							<Link to="/productos">Hacer Pedido</Link>
              <span></span><span></span><span></span><span></span>
						</li>

            <li>
							<Link to="..">Contactenos</Link>
              <span></span><span></span><span></span><span></span>
						</li>

						
					</ul>
				</nav>
        </div>
    </>
  )
}


export default NavBar;
