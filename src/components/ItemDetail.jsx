import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);
  
  const onAdd = (quantity) => {
    addItem(item, quantity);
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col text-end">
          <img src={"../" + item.imagen} alt={item.nombre} style={{ height: "270px" }} />
        </div>
        <div className="col d-flex align-items-center">
          <div>
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