const Destacado = () => {
    return (
        <div className="container-fluid">
            <div className="row pt-5 pb-5" >
                <div className="col-md-7 p-5">
                    <h1 style={{ fontSize: "85px" }} className="ps-5">Compra los productos que desees, al mejor precio</h1>
                    <p className="pt-4 ps-5">
                        Somos la tienda de comercio online pensada para ti.<br></br> Elegimos diseño y calidad, todos los productos que encontrás son a base de materiales sustentables. Tratando de generar el menor impacto posible en nuestro medioambiente.
                    </p>
                    <div className="ps-5">
                        <button className="btn bg-dark-subtle p-3 pe-5 ps-5">Comprar</button>
                    </div>
                </div>
                <div className="col-md-5 pt-5">
                    <img src={"/images/hero-img.png"} alt={"Promo #1"} width={"100%"} className="pe-5 pt-5" />
                </div>
            </div>
        </div>
    )
}

export default Destacado;

