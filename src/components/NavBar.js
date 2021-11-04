import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.js";
const NavBar = () => {
  return(
    <>
      <header>
        Tienda de Postres
        <CartWidget> </CartWidget>
         
      <nav>
					<ul className="navbar navbar-expand-lg nav justify-content-end"> 
						<li className="nav-item navMin">
							<a class="nav-link active" href="..">Inicio</a>
						</li>
					
						<li className="nav-item navMin">
							<Link to="/productos">Productos</Link>
						</li>
						
					</ul>
				</nav>
        </header>
    </>
  )
}


export default NavBar;
