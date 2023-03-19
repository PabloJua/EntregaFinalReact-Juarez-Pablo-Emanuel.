import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/1.png";

const NavBar = () => {
    return (
        <div className="container" style={{height: "170px"}} >
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg d-flex justify-content-center ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={logo} alt="Mcdonalds Argentina" width={"150"}/></Link> 
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassName={"active"} to={"/home"}>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {/*a ---> enlaces salientes.
                                         link ---> enlaces propios, internos de la app,que redireccionen a otro componente */}
                                        <NavLink className="nav-link" activeclassName={"active"} to={"/"}>Productos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassName={"active"} to={"category/abrigos"}>Abrigos</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassName={"active"} to={"category/camisetas"}>Camisetas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassName={"active"} to={"category/pantalones"}>Pantalones</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;


// min 32