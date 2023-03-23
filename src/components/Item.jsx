import { Link } from "react-router-dom"
import "../components/css/item.css"

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
        <div>
            <img src={process.env.PUBLIC_URL + item.imagen} className="producto-imagen" alt={item.nombre} /> {/*style={{height: "200px", width:"250px"}}*/}
            <div className="producto-detalles">
                <h3 class="producto-titulo">{item.nombre}</h3>
                <div className="bg-precio">
                    <p className="text-start">$ {item.precio}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Item