import avatar from "../../img/avatar.png" 

const Identity = () => {
    const logout_link = "/logout";
    const name = localStorage.getItem("name") || "Undefined";
    const profilePic = localStorage.getItem("profile_pic") || "assets/images/users/avatar-1.jpg";
    return(
        <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle header-profile-user" src={profilePic} onError={() => {
                    this.onerror=null; this.src={avatar};
                }}
                    alt="Header Avatar" />
                <span className="d-none d-sm-inline-block ml-1">{name}</span>
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item href" href={logout_link}><i className="mdi mdi-logout font-size-16 align-middle mr-1"></i> Logout</a>
            </div>
        </div>
    )
}

export default Identity;
