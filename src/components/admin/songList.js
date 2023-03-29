import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from '@mui/material';
import BackendService from "../../service/backendService";
import SongService from "../../service/songService";
import alertify from "alertifyjs";

class SongList extends React.Component {

    tableRef = React.createRef();

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
                                {title: "Id", field: "id", editable: "never"},
                                {title: "Nombre", field: "name"},
                                {title: "Artista", field: "artist"},
                                {title: "Categoría", field: "rithm"},
                                {title: "Link al Track", field: "linkToTrack"},
                                {title: "Link a Youtube", field: "linkToYoutube"},
                                {title: "Notas", field: "notes"},
                                {title: "Último domingo", field: "lastSunday", editable: "never"},
                                
                            ]}
                            editable={{
                                onRowAdd: newData => 
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        let token = localStorage.getItem("auth_token");
                                        SongService.createSong(token, newData)
                                        .then(() => {
                                            alertify.success("Se ha creado la canción correctamente");
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
                                        SongService.deleteSong(token, oldData.id)
                                        .then(() => {
                                            alertify.success("Se ha eliminado la canción "+ oldData.name + " correctamente");
                                            resolve();
                                        }).catch((err) => {
                                            BackendService.defaultErrorTreatment(err);
                                            reject();
                                        })
                                    }, 3000);
                                })
                            }}
                              data={query =>
                                new Promise((resolve) => {
                                    let limit = query.pageSize;
                                    let offset = query.page * limit;
                                    SongService.getSongList(localStorage.getItem("auth_token"), limit, offset)
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
                        />
                    </ThemeProvider>
                    
    
                </div>
            </div>
        )
    }
}

export default SongList;
