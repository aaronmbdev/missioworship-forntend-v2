import RoleList from "../components/admin/roleList";
import RoleForm from "../components/admin/roleForm";

const AdminSection = () => {
    return(
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
    )
}

export default AdminSection;
