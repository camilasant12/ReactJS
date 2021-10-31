
import ItemListContainer from "./components/ItemListContainer.js";
import  NavBar from "./components/NavBar.js";




const App = () => {
  
  
  return(
    <>
      <header>
      <div className="col-md-8 col-sm-12" >
        <NavBar> </NavBar>
      </div>
      </header>
      <section> 
        <ItemListContainer>
          
        </ItemListContainer>
        
      </section>
      
      <footer>
        Footer
      </footer>
    </>
  )
}


export default App;
