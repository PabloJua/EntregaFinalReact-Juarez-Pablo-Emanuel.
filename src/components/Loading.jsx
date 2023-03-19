const Loading = () => {
    return (
        <div className="container my-5">
            <div className="low">
                <div className="col-md-12 text-center">
                    <h1>Cargando...</h1>
                    <div class="spinner-border text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading