
import ItemListContainer from "./components/ItemListContainer.js";
import  NavBar from "./components/NavBar.js";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import CartContext from "./components/CartContext.js";
import Cart from "./components/Cart.js";
import Item from "./components/Item.js";


const App = () => {
  
  
  return(
    <>
    <BrowserRouter>
      <CartContext>
        <NavBar> </NavBar>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/productos/"> <ItemListContainer></ItemListContainer> </Route>
          <Route exact path="/categoria/:id/"> <ItemDetailContainer></ItemDetailContainer> </Route>
          <Route exact path="/categoria/:id/:id2/"> <Item></Item> </Route>
          <Route exact path="/cart"> <Cart></Cart> </Route>
        </Switch>
      </CartContext>
    </BrowserRouter>

      <footer>
        Footer
      </footer>
    </>
  )
}


export default App;
