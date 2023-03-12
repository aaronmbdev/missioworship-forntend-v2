import getRoleList from "../../service/roleService";
import React from "react";

class RoleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: null,
            err: null
        }
    }

    componentDidMount() {
        let self = this;
        getRoleList(localStorage.getItem("auth_token"))
        .then(function(response) {
            self.setState({response: response.data});
        }).catch(function(err){
            self.setState({err: err.response.data.problems});
        });
    }

    renderTableItems(items) {
        let rows = [];
        items.forEach(element => {
            rows.push(
                <tr key={element.id}>
                    <th scope="row">{element.id}</th>
                    <td>{element.name}</td>
                    <td>{element.clearance}</td>
                    <td><button type="button" className="btn btn-danger waves-effect waves-light">Borrar</button></td>
                </tr>
            );
        });
        return rows;
    }

    render() {
        let content = (
            <button className="btn btn-primary" type="button">
                <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                Cargando...
            </button>
        );
        if(this.state.response != null) {
            let items = this.renderTableItems(this.state.response);
            content = (
                <div className="table-responsive">
                        <table className="table mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Rol</th>
                                    <th>Nivel de autorización</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items}
                            </tbody>
                        </table>
                    </div>
            );
        } else if (this.state.err != null) {
            content = (
                <div class="alert alert-danger mb-0" role="alert">
                    {this.state.err}
                </div>
            );
        }

        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="header-title">Lista de roles disponibles</h4>
                    <p className="card-title-desc">Esta tabla contiene el listado de roles disponibles en el sistema. Se pueden borrar y volver a crear. 
                    <strong>Ojo! Si borras un rol, todos los usuarios que estén asignados dejarán de estarlo. Recuerda volver a asignar los roles.</strong>
                    </p>    
                    
                    {content}
    
                </div>
            </div>
        )
    }
}

export default RoleList;
