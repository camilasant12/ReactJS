
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
							<a class="nav-link active"  href="..">Nosotros</a>
						</li>
						<li className="nav-item navMin">
							<a class="nav-link active"  href="..">Servicios</a>
						</li>
						<li className="nav-item navMin">
							<a class="nav-link active"  href="..">Productos</a>
						</li>
						<li className="nav-item navMin">
							<a class="nav-link active"  href="..">Contacto</a>
						</li>
					</ul>
				</nav>
        </header>
    </>
  )
}


export default NavBar;
