
import ItemListContainer from "./components/ItemListContainer.js";
import  NavBar from "./components/NavBar.js";
import ItemDetailContainer from "./components/ItemDetailContainer";



const App = () => {
  
  
  return(
    <>
    <div class="container-fluid sticky-top ">
		  <div class="row">
        <div class="col-md-12 col-sm-12" >
          <header>
              <NavBar> </NavBar>
          </header>
        </div>
      </div>
    </div>
    <div class="container-fluid">
		  <div class="row">
		  	<div class=" container-fluid">	
          <section> 
            <ItemDetailContainer>
              
            </ItemDetailContainer>
            
          </section>
        </div>
      </div>  
    </div>
      
      <footer>
        Footer
      </footer>
    </>
  )
}


export default App;
