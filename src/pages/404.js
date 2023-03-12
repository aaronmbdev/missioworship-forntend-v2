
const NotFound = () => {
    return (
    <div className="account-pages my-5 pt-5">
        <div className="container">
            
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="mt-4 text-center">
                        <div>
                            <img src="assets/images/error-img.png" alt="" className="img-fluid mx-auto d-block" />
                        </div>

                        <h1 className="mt-5 text-uppercase text-black font-weight-bold mb-3">Ups! Parece que esta página no existe.</h1>
                        <div className="mt-5">
                            <a className="btn btn-success waves-effect waves-light" href="/">Volver a inicio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default NotFound;
