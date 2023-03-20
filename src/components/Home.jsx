import { Link } from "react-router-dom";
import "../components/css/home.css";

const Home = () => {
    return (
        <div className="container">
            <div className="row pt-5 pb-5" >
                <div className="col-md-7">
                <section class="text__cover">
                    <h1><span>¡Encontra lo mejor</span> en ropa, para vestirte en este verano e invierno!</h1>
                    <p className="pt-4">
                        Somos la tienda de comercio online pensada para ti.<br></br> Elegimos diseño y calidad, todos los productos que encontrás son a base de materiales sustentables. Tratando de generar el menor impacto posible en nuestro medioambiente.
                    </p>
                </section>
                    <div>
                        <Link to={"/"} className="btn__text">Comprar</Link>
                    </div>
                </div>
                <div className="col-md-5 pt-5">
                    <img src={"/images/hero-img.png"} alt={"Promo #1"} width={"700px"} className="pe-5 pt-5" />
                </div>
            </div>
        </div>
    )
}

export default Home;