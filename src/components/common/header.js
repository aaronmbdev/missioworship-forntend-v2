import Identity from "./identity";


const Header = () => {
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box">
                        <a href="/" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm-dark.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="19" />
                            </span>
                        </a>
    
                        <a href="/" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm-light.png" alt="" height="22" />
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="19" />
                            </span>
                        </a>
                    </div>
    
                    <button type="button" className="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                        <i className="fa fa-fw fa-bars"></i>
                    </button>
    
                </div>
    
                <div className="d-flex">
    
                    <div className="dropdown d-none d-lg-inline-block ml-1">
                        <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                            <i className="mdi mdi-fullscreen"></i>
                        </button>
                    </div>
    
                   <Identity />
                </div>
            </div>
        </header>
    )
}

export default Header;
