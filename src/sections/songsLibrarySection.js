import React, {Component} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import MaterialTable from "material-table";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SongService from "../service/songService";
import BackendService from "../service/backendService";

export default class SongsLibrarySection extends Component {
    tableRef = React.createRef();
    render() {
        const defaultMaterialTheme = createTheme();
        return(
            <div className="row">
                <div className="col-lg-12">
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
                                        {title: "Link a Youtube", field: "linkToYoutube", render: rowData => {
                                                return <a href={rowData.linkToYoutube} target="_blank" rel="noreferrer">
                                                    <YouTubeIcon />
                                                </a>
                                            }},

                                    ]}
                                    data={query =>
                                        new Promise((resolve) => {
                                            let limit = query.pageSize;
                                            let offset = query.page * limit;
                                            let token = localStorage.getItem("auth_token");
                                            let search = query.search;
                                            SongService.getActiveSongList(token, limit, offset, search)
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
                                            search: true
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
                </div>
            </div>
        );
    }
}