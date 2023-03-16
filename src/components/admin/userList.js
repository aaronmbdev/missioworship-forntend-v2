import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
import BackendService from "../../service/backendService";
import Swal from 'sweetalert2'
import alertify from "alertifyjs";
import UserService from "../../service/userService";

class UserList extends React.Component {

    tableRef = React.createRef();

    deleteUser(id, name) {
        let context = this;
        let token = localStorage.getItem("auth_token");
        Swal.fire({
            title: 'Confirmación',
            text: 'Estás a punto de eliminar el usuario ' + name + ' esto no puede revertise. Si quieres deshabilitarlo sólo tienes que quitarle el correo.',
            icon: 'warning',
            confirmButtonText: 'Seguro',
            cancelButtonText: 'Mejor me lo pienso',
            showCancelButton: true
          }).then((result) => {
            if (result.isConfirmed) {
                UserService.deleteUser(token, id)
                .then(() => {
                    alertify.success("Se ha eliminado el usuario "+ name + " correctamente");
                    context.tableRef.current.onQueryChange();
                }).catch((err) => {
                    BackendService.defaultErrorTreatment(err);
                })
            }
          })
    }

    render() {
        const defaultMaterialTheme = createTheme();
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="header-title">Lista de usuarios </h4>
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MaterialTable 
                            title="Usuario registrados"
                            tableRef={this.tableRef}
                            columns={[
                                {title: "Id", field: "id"},
                                {title: "Nombre", field: "name"},
                                {title: "Correo", field: "email"},
                                {title: "Roles", render: rowData => <p>Hola</p>}
                            ]}
                            actions={[
                                {
                                  icon: 'delete',
                                  tooltip: 'Eliminar usuario',
                                  onClick: (event, rowData) => this.deleteUser(rowData.id, rowData.name)
                                },
                                {
                                    icon: 'refresh',
                                    tooltip:'Actualizar datos',
                                    isFreeAction: true,
                                    onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange()
                                }
                              ]}
                              data={query =>
                                new Promise((resolve) => {
                                    UserService.getUserList(localStorage.getItem("auth_token"))
                                    .then(function(response) {
                                        resolve({
                                            data: response.data,
                                            page: 0,
                                            totalCount: response.data.length
                                        });
                                    }).catch((err) => {
                                        BackendService.defaultErrorTreatment(err);
                                    });
                                })
                            }
                        />
                    </ThemeProvider>
                    
    
                </div>
            </div>
        )
    }
}

export default UserList;
