import {Component} from "react";
import RoleService from "../../service/roleService";
import alertify from "alertifyjs";
import BackendService from "../../service/backendService";
class RoleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            authLevel: 0,
            creating: false
        }
    }
    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    changeAuthLevel(e) {
        this.setState({
            authLevel: e.target.value
        })
    }
    createRol() {
        let context = this;
        let {name, authLevel} = this.state;
        let token = localStorage.getItem("auth_token");
        if(name !== "") {
            this.setState({creating: true});
            RoleService.createRole(token, name, authLevel)
                .then(() => {
                    alertify.success("Se ha creado el rol "+ name + " correctamente");
                }).catch((err) => {
                    BackendService.defaultErrorTreatment(err);
                }).finally(() => {
                context.setState({
                    name: "",
                    authLevel: 0,
                    creating: false
                });
            });
        } else {
            alertify.error("El nombre del rol está vacío. Debe tener algún valor");
        }
    }
    render() {
        let {name, authLevel, creating} = this.state;
        return(
            <div className="card-body">
                <h4 className="header-title">Crear roles</h4>
                <p className="card-title-desc">Recuerda que el nivel de autorización determina los permisos del usuario.
                </p>

                <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-md-6 col-form-label">Nombre</label>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Super admin"
                               id="example-text-input" value={name} onChange={(val) => this.changeName(val)}/>
                    </div>
                </div>

                <div className="form-group row mb-0">
                    <label className="col-md-6 col-form-label">Nivel de autorización</label>
                    <div className="col-md-6">
                        <select
                            className="custom-select"
                            value={authLevel}
                            onChange={(e) => this.changeAuthLevel(e)}
                        >
                            <option>Seleccione una opción</option>
                            <option value="0">General</option>
                            <option value="1">Restringido</option>
                            <option value="2">Administración</option>
                        </select>
                    </div>
                </div>
                <p></p>

                <div className="form-group row mb-0">
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                            onClick={() => this.createRol()}
                            disabled={creating}
                        >
                            Crear rol
                        </button>
                    </div>

                </div>

            </div>
        );
    }
}

export default RoleForm;