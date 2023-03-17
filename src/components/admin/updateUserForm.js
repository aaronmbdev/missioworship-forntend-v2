import {Component} from "react";
import RoleService from "../../service/roleService";
import alertify from "alertifyjs";
import BackendService from "../../service/backendService";
import AsyncSelect from 'react-select/async';
import UserService from "../../service/userService";

class UpdateUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id || "",
            name: this.props.user.name || "",
            email: this.props.user.email || "",
            roles: 0,
            creating: false
        }
    }
    render() {
        let roles = [];
        if(this.props.user !== '') {
            roles = this.props.user.roles.map(opt => {
                return {label: opt.name, value: opt.id}
            });
        }
        let canUpdate = false;
        let buttonText = "Editar usuario";
        if (this.props.user == "") {
            canUpdate = true;
            buttonText = "Seleccione para editar";
        }
        const getRoles = () => {
            return new Promise(function(resolve, reject) {
                RoleService.getRoleList(localStorage.getItem("auth_token"))
                .then(function(response) {
                    let opts = [];
                    response.data.forEach(element => {
                        opts.push({
                            value: element.id,
                            label: element.name
                        });
                    });
                    resolve(opts);
                }).catch(function (err) {
                    reject(err);
                })
            });
        }

        return(
            <div className="card-body">
                <h4 className="header-title">Crear usuarios</h4>

                <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-md-4 col-form-label">Id</label>
                    <div className="col-md-8">
                        <input 
                            className="form-control" 
                            type="text"  
                            id="example-text-input" 
                            disabled={true} 
                            readOnly={true}
                            value={this.props.user.id || ""}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-md-4 col-form-label">Nombre</label>
                    <div className="col-md-8">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Super admin"
                            id="example-text-input" 
                            value={this.props.user.name || ""}
                            onChange={() => {}}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-md-4 col-form-label">Email</label>
                    <div className="col-md-8">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="aaron@ejemplo.com"
                            id="example-text-input" 
                            value={this.props.user.email || ""}
                            onChange={() => {}}
                        />
                    </div>
                </div>

                <div className="form-group row mb-0">
                    <label className="col-md-4 col-form-label">Roles</label>
                    <div className="col-md-8">
                    <AsyncSelect
                        isMulti
                        cacheOptions
                        defaultOptions
                        loadOptions={getRoles}
                        value={roles}
                    />
                    </div>
                </div>
                <p></p>

                <div className="form-group row mb-0">
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                            disabled={canUpdate}
                        >
                            {buttonText}
                        </button>
                    </div>

                </div>

            </div>
        );
    }
}

export default UpdateUserForm;
