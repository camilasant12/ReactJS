import { useContext } from "react"
import { contexto } from "./CartContext"




const Total = () => {
  const {cart} = useContext(contexto) 

  console.log("soy cart desde total " +JSON.stringify({cart}))
  return(
    <>
    <div class='line'></div>
    <div class='total'>
        <span id="totalSpan">
            <div class='thin dense'><h1>$4.95</h1>
            </div>
        </span>
    </div>

     
  
    </>
  )
}


export default Total;
