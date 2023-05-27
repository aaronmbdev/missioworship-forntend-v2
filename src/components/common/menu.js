
const AdminTabLink = (props) => {
    if(props.clearanceLevel === "2") {
        return (<li className="nav-item">
                    <a className="nav-link" href="/administracion">
                        <i className="mdi mdi-security mr-2"></i>Administración
                    </a>
                </li>);
    }
    return (<p></p>);
}


const Menu = () => {
    const clearanceLevel = localStorage.getItem("clearanceLevel") || 0;
    return (
        <div className="topnav">
            <div className="container-fluid">
                <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
    
                    <div className="collapse navbar-collapse" id="topnav-menu-content">
                        <ul className="navbar-nav">
                            <AdminTabLink clearanceLevel={clearanceLevel}/>
    
                            <li className="nav-item">
                                <a className="nav-link" href="/asistencia">
                                    <i className="mdi mdi-account-check mr-2"></i>Asistencia
                                </a>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link" href="/planning">
                                    <i className="mdi mdi-notebook mr-2"></i>Planning mensual
                                </a>
                            </li>   */}

                            <li className="nav-item">
                                <a className="nav-link" href="/canciones">
                                    <i className="mdi mdi-music mr-2"></i>Listado de canciones
                                </a>
                            </li>   
    
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Menu;
