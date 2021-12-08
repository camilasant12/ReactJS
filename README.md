# Información del proyecto
Este es mi proyecto final para el curso de ReactJS en CoderHouse, parte de la carrera de desarrollador web full-stack.
Este proyecto consiste en un ecommerce implementado con React junto con Typescript, React Router, React Hooks y Firebase como base de datos. 
 ![image](https://user-images.githubusercontent.com/55412469/145291436-e18bc057-1ebd-49a1-bcd8-798235206d2f.png)

 
 
# Flujo de Compra
El flujo de compra fue pensando para que el usuario tenga la mejor experiencia de usuario y el pagina este en capacidad de guiar al usuario en cada paso y en caso de un cambio de decisión, la pagina le permita hacer cualquier corrección y cumplir con los antojos de nuestros usuarios.
Para realizar la compra de uno o más productos, el usuario debe ingresar al Menú y seleccionar la categoría del producto que desea, después seleccionar el producto y las cantidades que desea, luego dar en añadir al carrito y listo, repetir con cada producto.
Al momento de finalizar la compra el usuario debe ir al carrito y ver todo el pedido, si desea puede eliminar un producto o seguir comprando, si todo esta correcto, solo debe darle en finalizar compra.
Una vez que se procede a pagar, se debería agregar una API de pago, como lo puede ser mercado pago, que no fue agregada porque el objetivo del proyecto no era ese. En este caso, directamente se realiza la orden en caso de que haya stock de los productos, se borra los ítems del carrito y se le muestra una alerta al usuario que le indica que la compra fue realizada correctamente y se le proporciona de un id de compra.
# Componentes
## Cart
### Importaciones
•	Se va a utilizar el useContext Hook con el CartContext para obtener las funciones addToCart, elimCart, removeItem y el array Cart.
•	Se va a utilizar el useState Hook que nos ayuda a ir agregando cada producto al cart.
## CategoriaList
### Importaciones
•	Se va a utilizar el "Link" de react-router-dom para poder crear links en donde se redirecciona al usuario.
## CartWidget
### Importaciones
•	Se va a utilizar el useContext Hook con el CartContext para obtener el array Cart.
•	Se va a utilizar el "Link" de react-router-dom para poder crear links en donde se redirecciona al usuario.
## ItemCounter
### Importaciones
•	Se va a utilizar el useState Hook que nos ayuda a ir agregando o quitando las cantidades del producto y añadir al carrito el producto y la cantidad.
## ItemDetail
### Importaciones
•	Se va a utilizar el "Link" de react-router-dom para poder crear links en donde se redirecciona al usuario al producto seleccionado.
## ItemDetailContainer
### Importaciones
•	Se va a utilizar el useState Hook para establecer los productos.
•	Se va a utilizar el useEffect Hook para re-renderizar el componente cuando cambia el listado de productos.
•	Se utiliza el useParams Hook para poder obtener el parámetro dado por ruta, “id”.
•	Se utiliza FireStore, para traer los productos almacenados.
## ItemListContainer
### Importaciones
•	Se va a utilizar el useState Hook para establecer las secciones.
•	Se va a utilizar el useEffect Hook para re-renderizar el componente cuando cambia el listado de secciones.
•	Se utiliza el useParams Hook para poder obtener el parámetro dado por ruta, “id”.
•	Se utiliza FireStore, para traer las secciones almacenadas.
## ItemList
### Importaciones
•	Se va a utilizar el "Link" de react-router-dom para poder crear links en donde se redirecciona al usuario al producto de la categoría seleccionada.
## NavBar
### Importaciones
•	Se va a utilizar el "Link" de react-router-dom para poder crear links en donde se redirecciona al usuario.

## Header – Footer
No tiene importaciones, son secciones informativas.

