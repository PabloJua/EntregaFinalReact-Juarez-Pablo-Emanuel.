import { Link, useParams } from "react-router-dom"

const Agradecimiento = () => {
  const {orderId} = useParams();
    return (
    <div className="container">
        <div className="row my-5">
        <div className="col-md-12 text-center">
          { orderId ? <div class="alert alert-info text-center" role="alert">
            <h3>Gracias por tu compra!</h3>
            <p>Se generó una Orden de Compra, con el ID: <b>{orderId}</b></p></div> : "" }
            <Link to={"/"} className="btn btn-warning bg-warning">Volver al menu principal</Link>
        </div>
      </div>
    </div>
  )
}

export default Agradecimiento