import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import "../components/css/checkout.css"

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, clear, cartTotalPagar } = useContext(CartContext);

  const generarOrden = () => {
    const buyer = { name: nombre, email: email, phone: telefono };
    const fecha = new Date();
    const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    const order = { buyer: buyer, items: { cart }, date: date, total: cartTotalPagar() };

    if (nombre.length === 0) {
      return false;
    }

    if (email.length === 0) {
      return false;
    }

    if (telefono.length === 0) {
      return false;
    }

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(data => {
      setOrderId(data.id);
      clear();
    });
  }

  return (
    <div className="container">
      <div className="row ps-4">
      <h1 className="text-start fw-bolder">Finalizar Compra</h1>
      </div>
      <div className="row container__orden">
        <div className="col-md-4 container-login">
          <form id="login" class="formulario-orden">
            <h2>Generar Orden</h2>
            <input id="nombre" type="text" placeholder="Nombre" onInput={(e) => {
              setNombre(e.target.value);
            }} />
            <input id="email" type="text" placeholder="Email" onInput={(e) => {
              setEmail(e.target.value);
            }} />
            <input id="telefono" type="text" placeholder="Teléfono" onInput={(e) => {
              setTelefono(e.target.value);
            }} />
            <button type="button" className="btn btn__generar mb-3" onClick={generarOrden} id="btn-ingresar">Generar</button>
          </form>
        </div>
        <div className="col-md-8 container__compra" >
          <table className="table">
            {
              cart.map(item =>
                <tr key={item.index}>
                  <td className="text-start" width="10%"><img src={item.imagen} alt={item.hombre} width={85} style={{ borderRadius: "35%" }} /></td>
                  <td className="text-start align-middle fw-bold ps-5" width="40%">{item.nombre}</td>
                  <td className="text-center align-middle" width="20%">{item.quantity} x ${item.precio} </td>
                  <td className="text-center align-middle" width="20%">${item.quantity * item.precio}</td>
                </tr>
              )
            }
            <tr>
              <td colSpan={2}>&nbsp;</td>
              <td className="text-center">Total a Pagar</td>
              <td className="text-center"><b>${cartTotalPagar()}</b></td>
            </tr>
          </table>
        </div>
      </div>
      {orderId ? <Navigate to={"/agradecimiento/" + orderId} /> : ""}
    </div>
  )

}

export default Checkout



