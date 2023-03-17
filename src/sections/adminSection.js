import React from "react";
import RoleList from "../components/admin/roleList";
import RoleForm from "../components/admin/roleForm";
import UserList from "../components/admin/userList";
import UserForm from "../components/admin/userForm";
import SongForm from "../components/admin/songForm";
import SongList from "../components/admin/songList";
import UpdateUserForm from "../components/admin/updateUserForm";

class AdminSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateUser: ""
        }
        this.updateUser = this.updateUser.bind(this);
    }
    updateUser(value) {
        this.setState({
            updateUser: value
        })
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
                    <div className="col-lg-6">
                        <UserList updateFunc={this.updateUser} />
                    </div>
    
                    <div className="col-lg-3">
                        <div className="card">
                            <UpdateUserForm user={this.state.updateUser} />
                        </div>
                    </div>
                    
                    <div className="col-lg-3">
                        <div className="card">
                            <UserForm />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                       
                    </div>
                    
                    <div className="col-lg-4">
                        <div className="card">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminSection;
