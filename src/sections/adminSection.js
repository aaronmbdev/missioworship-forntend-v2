import React from "react";
import RoleList from "../components/admin/roleList";
import RoleForm from "../components/admin/roleForm";
import UserList from "../components/admin/userList";
import UserForm from "../components/admin/userForm";
import SongList from "../components/admin/songList";

class AdminSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-lg-8">
                        <RoleList />
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="card">
                            <RoleForm />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <UserList/>
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="card">
                            <UserForm />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                       <SongList />
                    </div>
                
                </div>
            </div>
        )
    }
}

export default AdminSection;
