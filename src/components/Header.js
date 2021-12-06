import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.js";
import logo from  "./img/logo_pasteleria.png";
import "./estilos.css";

const Header = () => {
  return(
    <>
      <header>
        <img   src={logo}  />
        <CartWidget> </CartWidget>       
      </header>
    </>
  )
}


export default Header;
