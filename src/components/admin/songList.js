import React from "react";
import MaterialTable from "material-table";
import { Switch, ThemeProvider, createTheme } from '@mui/material';
import BackendService from "../../service/backendService";
import SongService from "../../service/songService";
import alertify from "alertifyjs";
import YouTubeIcon from '@mui/icons-material/YouTube';
import AsyncSelect from 'react-select/async';

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabledOnly: props.disponibles,
            title: props.title
        }
    }

    tableRef = React.createRef();

    render() {
        const getRithms = () => {
            return new Promise(function(resolve, reject) {
                SongService.getAvailableRithms(localStorage.getItem("auth_token"))
                .then(function(response) {
                    let opts = [];
                    response.data.forEach(element => {
                        opts.push({
                            value: element,
                            label: element
                        });
                    });
                    resolve(opts);
                }).catch(function (err) {
                    reject(err);
                })
            });
        }
        const defaultMaterialTheme = createTheme();
        const availableOnly = this.state.enabledOnly;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="header-title">{this.state.title}</h4>  
                    <ThemeProvider theme={defaultMaterialTheme}>
                        <MaterialTable 
                            title="Canciones"
                            tableRef={this.tableRef}
                            columns={[
                                {title: "Id", field: "id", editable: "never"},
                                {title: "Nombre", field: "name"},
                                {title: "Artista", field: "artist"},
                                {title: "Categoría", field: "rithm", editComponent: props => (
                                    <AsyncSelect
                                        defaultInputValue={props.value}
                                        loadOptions={getRithms}
                                        onChange={e => props.onChange(e)}
                                    />
                                )},
                                {title: "Link a Youtube", field: "linkToYoutube", render: rowData => {
                                    return <a href={rowData.linkToYoutube} target="_blank" rel="noreferrer">
                                        <YouTubeIcon />
                                        </a>
                                }},
                                {title: "Notas", field: "notes"},
                                {title: "Último domingo", field: "lastSunday", editable: "never"},
                                {title: "Activa?", field: "active", render: rowData => {
                                    return <Switch checked={rowData.active} />
                                    },
                                    editComponent: props => (
                                        <Switch checked={props.value} onChange={() => props.onChange(!props.value)}/>
                                    )
                                }
                                
                            ]}
                            editable={{
                                onRowAdd: newData => 
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        let token = localStorage.getItem("auth_token");
                                        let payload = {
                                            name: newData.name,
                                            artist: newData.artist,
                                            rithm: newData.rithm.value,
                                            notes: newData.notes,
                                            active: newData.active,
                                            linkToTrack: newData.linkToTrack,
                                            linkToYoutube: newData.linkToYoutube
                                        }
                                        SongService.createSong(token, payload)
                                        .then(() => {
                                            alertify.success("Se ha creado la canción correctamente");
                                            resolve();
                                        }).catch((err) => {
                                            BackendService.defaultErrorTreatment(err);
                                            reject();
                                        })
                                    }, 3000);
                                }),
                                onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    let token = localStorage.getItem("auth_token");
                                    let payload = {
                                        name: newData.name,
                                        artist: newData.artist,
                                        rithm: newData.rithm.value,
                                        notes: newData.notes,
                                        active: newData.active
                                    }
                                    if(oldData.linkToTrack !== newData.linkToTrack) {
                                        payload.linkToTrack = newData.linkToTrack;
                                    }
                                    if(oldData.linkToYoutube !== newData.linkToYoutube) {
                                        payload.linkToYoutube = newData.linkToYoutube;
                                    }
                          
                                    SongService.updateSong(token, oldData.id, payload)
                                    .then(() => {
                                        alertify.success("Se ha editado la canción correctamente");
                                        resolve();
                                    }).catch((err) => {
                                        BackendService.defaultErrorTreatment(err);
                                        reject();
                                    })
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
                                    let search = query.search;
                                    let token = localStorage.getItem("auth_token");
                                    SongService.getSongList(token, limit, offset, search, availableOnly)
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

export default SongList;
