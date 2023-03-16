import RoleList from "../components/admin/roleList";
import RoleForm from "../components/admin/roleForm";
import UserList from "../components/admin/userList";
import UserForm from "../components/admin/userForm";

const AdminSection = () => {
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
                    <UserList />
                </div>
                
                <div className="col-lg-4">
                    <div className="card">
                        <UserForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSection;
