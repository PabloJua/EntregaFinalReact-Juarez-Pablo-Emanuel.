import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext"
// import trash from "./images/trash3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faFaceFrown} from "@fortawesome/free-solid-svg-icons"
import "../components/css/cart.css"

const Cart = () => {
  const { cart, clear, removeItem, cartTotalPagar, cartTotalProductos } = useContext(CartContext);

  if (cartTotalProductos() === 0) {
    return (
      /*Carrito vacio */
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h2 class="titulo__cart pb-3">Carrito</h2>
          <p class ="carrito-vacio fs-5">Tu carrito esta vacío. <FontAwesomeIcon icon={faFaceFrown} className="carrito-producto-eliminar"/></p>
            </div>
          </div>
        </div>
    )
  }

  return (
    <main>
      <h2 class="titulo__cart">Carrito</h2>
      <div class="contenedor-carrito">
        <div id="carrito-productos" className="carrito-productos">
          {
            cart.map(item =>
              <div className="carrito-producto">
              <tr key={item.index} className= "carrito-producto w-100">
                <div>
                <td className="text-start" width="10%"><img src={item.imagen} alt={item.nombre} className="carrito-producto-imagen"/></td>
                </div>
                <div>
                  <small>Nombre</small>
                  <td className="text-start align-middle fw-bold fs-5" width="30%">{item.nombre}</td>
                </div>
                <div>
                  <small>Subtotal</small>
                  <td className="text-center align-middle fs-6" width="20%">{item.quantity} x ${item.precio} </td>
                </div>
                <div>
                  <small>Total</small>
                  <td className="text-center align-middle fs-6" width="20%">${item.quantity * item.precio}</td>
                </div>
                <div className="pe-3">
                  <td className="text-end align-middle" width="20%"><button type="button" className="btn" onClick={() => { removeItem(item.index) }} title={"Eliminar Producto"}><FontAwesomeIcon icon={faTrash} className="carrito-producto-eliminar"/></button></td>
                </div>
              </tr>
              </div>
            )
          }
          
        </div>
      </div>
      <div className="col-md-12">
        <table className="table">
          <tr>
            <td className="text-start pt-5" colSpan={5}><Link type="button" className="btn" style={{backgroundColor:"#778bb3"}} onClick={() => { clear() }}>Vaciar Carrito</Link></td>
            <td className="text-center pt-5">Total a Pagar:<b>${cartTotalPagar()}</b></td>
            <td className="text-end pt-5"><Link to={"/checkout"} type="button" className="btn" style={{backgroundColor:"#778bb3"}}>Finalizar Compra</Link></td>
          </tr> 
        </table>
      </div>
    </main>
  )
}
export default Cart


