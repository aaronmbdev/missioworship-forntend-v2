import getRoleList from "../../service/roleService";
import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
import alertify from "alertifyjs";

class RoleList extends React.Component {

    render() {
        const defaultMaterialTheme = createTheme();
        let tableRef = React.createRef();
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="header-title">Lista de roles disponibles</h4>
                    <p className="card-title-desc">Esta tabla contiene el listado de roles disponibles en el sistema. Se pueden borrar y volver a crear. 
                    <strong>Ojo! Si borras un rol, todos los usuarios que estén asignados dejarán de estarlo. Recuerda volver a asignar los roles.</strong>
                    </p>    
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MaterialTable 
                            title="Roles"
                            tableRef={tableRef}
                            columns={[
                                {title: "Id", field: "id"},
                                {title: "Rol", field: "name"},
                                {title: "Nivel de autorización", field: "clearance"}
                            ]}
                            actions={[
                                {
                                  icon: 'delete',
                                  tooltip: 'Eliminar rol',
                                  onClick: (event, rowData) => alert("You saved " + rowData.name)
                                },
                                {
                                    icon: 'refresh',
                                    tooltip:'Actualizar datos',
                                    isFreeAction: true,
                                    onClick: () => tableRef.current && tableRef.current.onQueryChange()
                                }
                              ]}
                              data={query =>
                                new Promise((resolve) => {
                                    getRoleList(localStorage.getItem("auth_token"))
                                    .then(function(response) {
                                        resolve({
                                            data: response.data,
                                            page: 0,
                                            totalCount: response.data.length
                                        });
                                    }).catch(function(err){
                                        alertify.error(err.response.data.problems[0]);
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

export default RoleList;
