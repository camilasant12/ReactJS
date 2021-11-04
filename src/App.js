
import ItemListContainer from "./components/ItemListContainer.js";
import  NavBar from "./components/NavBar.js";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer.js";



const App = () => {
  
  
  return(
    <>
    <BrowserRouter>
    <NavBar> </NavBar>
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/productos/"> <ItemListContainer></ItemListContainer> </Route>
      <Route exact path="/categoria/:id/"> <ItemDetailContainer></ItemDetailContainer> </Route>
    </Switch>

    </BrowserRouter>

      <footer>
        Footer
      </footer>
    </>
  )
}


export default App;
