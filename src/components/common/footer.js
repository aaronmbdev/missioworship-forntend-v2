
const Footer = () => {
    return(
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        2023 © Missio Sant Cugat. Version <strong>{process.env.REACT_APP_VERSION}</strong>
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-right d-none d-sm-block">
                            Crafted with <i className="mdi mdi-heart text-danger"></i> by Aaron J. Morales Botton

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
