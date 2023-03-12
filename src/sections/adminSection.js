import RoleList from "../components/admin/roleList";

const AdminSection = () => {
    return(
        <div className="row">
            <div className="col-lg-8">
                <RoleList />
            </div>
            
            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="header-title">Dark table</h4>
                        <p className="card-title-desc">You can also invert the colors—with light text on dark backgrounds—with <code>.table-dark</code>.
                        </p>    
                        
                        <div className="table-responsive">
                            <table className="table table-dark mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSection;
