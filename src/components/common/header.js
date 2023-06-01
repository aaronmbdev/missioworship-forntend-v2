import Identity from "./identity";

const Header = () => {
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    <button type="button" className="btn btn-sm mr-2 font-size-16 d-lg-none header-item waves-effect waves-light" data-toggle="collapse" data-target="#topnav-menu-content">
                        <i className="fa fa-fw fa-bars"></i>
                    </button>
                </div>
                <div className="d-flex">
                   <Identity />
                </div>
            </div>
        </header>
    )
}

export default Header;
