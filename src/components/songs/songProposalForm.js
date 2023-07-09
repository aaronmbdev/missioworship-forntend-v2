import React, {Component} from "react";
import alertify from "alertifyjs";
import SongService from "../../service/songService";
import BackendService from "../../service/backendService";
import AsyncSelect from "react-select/async";

export default class SongProposalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            artista: "",
            link: "",
            rithm: "",
        }
        this.createNewProposal = this.createNewProposal.bind(this);
    }

    setNombre(e) {
        this.setState({
            nombre: e.target.value
        });
    }

    setArtista(e) {
        this.setState({
            artista: e.target.value
        });
    }

    setLink(e) {
        this.setState({
            link: e.target.value
        });
    }

    setRithm(e) {
        this.setState({
           rithm: e
        });
    }

    validFields(nombre, artista, link, rithm) {
        if(nombre === "" || artista === "" || link === "" || rithm === "") {
            alertify.error("Todos los campos deben estar llenos para continuar");
            return false;
        } else {
            return true;
        }
    }

    createNewProposal() {
        let token = localStorage.getItem("auth_token");
        let {nombre, artista, link, rithm} = this.state;
        if(this.validFields(nombre, artista, link, rithm)) {
            SongService.createSong(token, {
                name: nombre,
                artist: artista,
                linkToYoutube: link,
                rithm: rithm.value
            }).then(response => {
                alertify.success("Se ha enviado la canción correctamente");
                this.setState({
                    nombre: "",
                    artista: "",
                    link: "",
                })
            }).catch(err => {
                BackendService.defaultErrorTreatment(err);
            });
        }
    }

    getRithms() {
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

    render() {
        let {nombre, artista, link} = this.state;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="header-title">¿Te gustaría proponer una canción nueva?   </h4>

                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-md-4 col-form-label">Nombre</label>
                                <div className="col-md-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="No vas a parar"
                                        value={nombre}
                                        onChange={(e) => this.setNombre(e)}
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-md-4 col-form-label">Artista</label>
                                <div className="col-md-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Elevation Worship"
                                        value={artista}
                                        onChange={(e) => this.setArtista(e)}
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-md-4 col-form-label">Link a Youtube</label>
                                <div className="col-md-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="https://youtube.com/xyz"
                                        value={link}
                                        onChange={(e) => this.setLink(e)}
                                        />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="example-text-input" className="col-md-4 col-form-label">Ritmo</label>
                                <div className="col-md-8">
                                    <AsyncSelect
                                        loadOptions={this.getRithms}
                                        onChange={e => this.setRithm(e)}
                                    />
                                </div>
                            </div>

                            <div className="form-group row mb-0">
                                <div className="col-md-12">
                                    <button
                                        type="button"
                                        className="btn btn-primary waves-effect waves-light"
                                        onClick={this.createNewProposal}
                                    >
                                        Sugerir nueva canción
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}