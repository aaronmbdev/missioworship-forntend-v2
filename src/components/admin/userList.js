import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
import BackendService from "../../service/backendService";
import alertify from "alertifyjs";
import UserService from "../../service/userService";
import RoleListElement from "./roleListElement";

class UserList extends React.Component {

    tableRef = React.createRef();

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
                            editable={{
                                isEditable: rowData => rowData.id !== 1,
                                isDeletable: rowData => rowData.id !== 1,
                                onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        let token = localStorage.getItem("auth_token");
                                        UserService.updateUserData(token, oldData.id, newData.name, newData.email)
                                        .then(() => {
                                            alertify.success("Se ha editado el usuario "+ newData.name + " correctamente");
                                            resolve();
                                        }).catch((err) => {
                                            BackendService.defaultErrorTreatment(err);
                                            reject();
                                        })
                                    }, 3000);
                                }),
                                onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        let token = localStorage.getItem("auth_token");
                                        UserService.deleteUser(token, oldData.id)
                                        .then(() => {
                                            alertify.success("Se ha eliminado el usuario "+ oldData.name + " correctamente");
                                            resolve();
                                        }).catch((err) => {
                                            BackendService.defaultErrorTreatment(err);
                                            reject();
                                        })
                                    }, 3000);
                                })
                            }}
                            columns={[
                                {title: "Id", field: "id", editable: "never"},
                                {title: "Nombre", field: "name"},
                                {title: "Correo", field: "email"},
                                {title: "Roles", render: rowData => <RoleListElement roles={rowData.roles} />, 
                                    editable: "never",
                                }
                            ]}

                              data={query =>
                                new Promise((resolve) => {
                                    let limit = query.pageSize;
                                    let offset = query.page * limit;
                                    UserService.getUserList(localStorage.getItem("auth_token"), limit, offset)
                                    .then(function(response) {
                                        resolve({
                                            data: response.data.values,
                                            page: query.page,
                                            totalCount: response.data.total_count
                                        });
                                    }).catch((err) => {
                                        BackendService.defaultErrorTreatment(err);
                                    });
                                })
                            }
                            options={
                                {
                                    search: false,
                                }
                            }
                            actions={[
                                {
                                    icon: 'refresh',
                                    tooltip:'Actualizar datos',
                                    isFreeAction: true,
                                    onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange()
                                }
                              ]}
                        />
                    </ThemeProvider>
                    
    
                </div>
            </div>
        )
    }
}

export default UserList;
