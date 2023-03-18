import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
        <div classNameName="card">
            <img src={process.env.PUBLIC_URL + item.imagen} className="card-img-top" alt={item.nombre} style={{height: "200px", width:"250px"}} />
            <div className="card-body text-center">
                <p className="card-title">{item.nombre}</p>
            </div>
        </div>
        </Link>
    )
}

export default Item