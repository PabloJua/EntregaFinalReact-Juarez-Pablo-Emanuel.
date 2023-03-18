import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import carrito from "./images/cart.svg";


const CartWidget = () => {
    const {cartTotalProductos} = useContext(CartContext) 
    
    return (cartTotalProductos() > 0) ? 
        <Link to={"/cart"} className="btn bg-info-subtle position-relative">
            <img src={carrito} alt={"Carrito"} width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotalProductos()}</span>
        </Link> : "";
    
}

export default CartWidget;