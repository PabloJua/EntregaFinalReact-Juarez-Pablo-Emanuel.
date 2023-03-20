import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "../components/css/itemDetail.css"


const ItemCount = ({stock, onAdd}) => {
    /*Contador Boton*/
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false)

    
    const incrementarStock = () => {
        if (items < itemStock) {
            setItems (items + 1);
        }
    }
    
    const decrementarStock = () => {
        if (items > 1) {
        setItems (items - 1);
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setItemStock (itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    }

    useEffect(() =>{
        setItemStock(stock);
    },[stock])

    return (
        <div className="container-boton text-center">
            <div className="row-btn__incrementar-decrementar my-2">
                <div className="col text-start">
                    <div className="btn-group">
                        <button type="button" className="btn bg-info-subtle" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn bg-info-subtle">{items}</button>
                        <button type="button" className="btn bg-info-subtle" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row-btn__agregar-terminar my-1 ">
                <div className="col text-start">
                    {/**Cambio de boton y pasa a ser un enlace*/}
                    { itemAdded ? <Link to={"/cart"} className="btn bg-info-subtle"> Terminar mi compra </Link> :
                    <button className="btn bg-info-subtle" onClick={addToCart}>Agregar al carrito</button>}
                </div>
            </div>
        </div>

    )
}

export default ItemCount