import RoleService from "../../service/roleService";
import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
import AuthLevel from "./authLevel";
import BackendService from "../../service/backendService";
import Swal from 'sweetalert2'
import alertify from "alertifyjs";

class SongList extends React.Component {

    tableRef = React.createRef();

    /*deleteSong(id, name) {
        let context = this;
        let token = localStorage.getItem("auth_token");
        Swal.fire({
            title: 'Confirmación',
            text: 'Estás a punto de eliminar el rol ' + name + ' esto no puede revertise y los usuarios perderán el rol. ¿Seguro?',
            icon: 'warning',
            confirmButtonText: 'Seguro',
            cancelButtonText: 'Mejor me lo pienso',
            showCancelButton: true
          }).then((result) => {
            if (result.isConfirmed) {
                if(id !== 1) {
                    RoleService.deleteRole(token, id)
                    .then(() => {
                        alertify.success("Se ha eliminado el rol "+ name + " correctamente");
                        context.tableRef.current.onQueryChange();
                    }).catch((err) => {
                        BackendService.defaultErrorTreatment(err);
                    })
                } else {
                    Swal.fire(
                    'Error',
                    'El rol '+ name + ' pertenece a los administradores, si te lo cargas nadie podrá ser administrador.',
                    'error'
                    )
                }
            }
          })
    }*/

    render() {
        const defaultMaterialTheme = createTheme();
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="header-title">Lista de canciones disponibles</h4>  
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MaterialTable 
                            title="Canciones"
                            tableRef={this.tableRef}
                            columns={[
                                {title: "Id", field: "id"},
                                {title: "Nombre", field: "name"},
                                {title: "Nivel de autorización", render: rowData => <AuthLevel level={rowData.clearance}/>}
                            ]}
                            actions={[
                                {
                                  icon: 'delete',
                                  tooltip: 'Eliminar rol',
                                  onClick: (event, rowData) => this.deleteRole(rowData.id, rowData.name)
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
                                    RoleService.getRoleList(localStorage.getItem("auth_token"))
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

export default SongList;
