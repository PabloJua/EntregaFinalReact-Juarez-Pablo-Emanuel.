import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";
import "../components/css/itemDetail.css"

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);
  
  const onAdd = (quantity) => {
    addItem(item, quantity);
  }


  return (
    <div className="container contenedor__details-productos">
      <div className="row">
        <div className="col text-end contenedor__img-productos">
          <img src={"../" + item.imagen} alt={item.nombre} style={{ height: "270px", borderRadius:"50%" }} />
        </div>
        <div className="col">
          <div className="details__productos">
            <h1>{item.nombre}</h1>
            <h5>$ {item.precio}</h5>
            <p>{item.descripcion}</p>
            <ItemCount stock={item.stock} onAdd={onAdd}/>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ItemDetail