import Item from "./Item"

const ItemList = ({items}) => {
  return (
    <div className="row" style={{marginBottom:"20px"}}>
            {items.map (item => (
            <div className="col-md-4 text-center pe-0 ps-0" key={item.index}>
                <Item item={item} />
            </div>
        )) }
    </div>
  )
}

export default ItemList