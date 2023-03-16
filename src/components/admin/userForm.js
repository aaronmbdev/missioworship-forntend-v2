import {Component} from "react";
import RoleService from "../../service/roleService";
import alertify from "alertifyjs";
import BackendService from "../../service/backendService";
import AsyncSelect from 'react-select/async';
import UserService from "../../service/userService";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            roles: 0,
            creating: false
        }
    }
    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    changeSelectedRoles(e) {
        this.setState({
            roles: e
        })
    }
    createUser() {
        let context = this;
        let {name, roles, email} = this.state;
        let uploadable_roles = [];
        roles.forEach(element => {
            uploadable_roles.push(element.value);
        });
        let token = localStorage.getItem("auth_token");
        if(name !== "" && email !== "") {
            this.setState({creating: true});
            UserService.createUser(token, name, email, uploadable_roles)
                .then(() => {
                    alertify.success("Se ha creado el usuario "+ name + " correctamente");
                }).catch((err) => {
                    BackendService.defaultErrorTreatment(err);
                }).finally(() => {
                context.setState({
                    name: "",
                    email: "",
                    creating: false
                });
            });
        } else {
            alertify.error("El nombre y/o correo está(n) vacío(s). Revisa los valores!");
        }
    }
    render() {
        let {name, email, creating} = this.state;
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
                    <label htmlFor="example-text-input" className="col-md-6 col-form-label">Nombre</label>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="Super admin"
                               id="example-text-input" value={name} onChange={(val) => this.changeName(val)}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="example-text-input" className="col-md-6 col-form-label">Email</label>
                    <div className="col-md-6">
                        <input className="form-control" type="text" placeholder="aaron@ejemplo.com"
                               id="example-text-input" value={email} onChange={(val) => this.changeEmail(val)}/>
                    </div>
                </div>

                <div className="form-group row mb-0">
                    <label className="col-md-6 col-form-label">Roles</label>
                    <div className="col-md-6">
                    <AsyncSelect
                        isMulti
                        cacheOptions
                        defaultOptions
                        loadOptions={getRoles}
                        onChange={(e) => this.changeSelectedRoles(e)}
                    />
                    </div>
                </div>
                <p></p>

                <div className="form-group row mb-0">
                    <div className="col-md-12">
                        <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                            onClick={() => this.createUser()}
                            disabled={creating}
                        >
                            Crear usuario
                        </button>
                    </div>

                </div>

            </div>
        );
    }
}

export default UserForm;
