import React, {Component} from "react";
import AsyncSelect from "react-select/async";
import SongService from "../../service/songService";
import BackendService from "../../service/backendService";
import SundaySongService from "../../service/sundaySongService";
import alertify from "alertifyjs";

export default class SongListForSunday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song_one: null,
            song_two: null,
            song_three: null,
            song_four: null,
            button_enabled: true,
            delete_button_enabled: true
        }
    }

    componentDidMount() {
        this.querySongsForDateAndUpdate();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.date !== this.props.date) {
            this.querySongsForDateAndUpdate();
        }
    }

    querySongsForDateAndUpdate() {
        let date = this.props.date;
        let token = localStorage.getItem("auth_token");
        SundaySongService.getSongsForDate(token, date)
            .then((response) => {
                let data = response.data;
                let first_song = data.first_song;
                let second_song = data.second_song;
                let third_song = data.thrid_song;
                let forth_song = data.forth_song;
                this.setState({
                    song_one: {label: first_song.name, value: first_song.id},
                    song_two: {label: second_song.name, value: second_song.id},
                    song_three: {label: third_song.name, value: third_song.id},
                    song_four: {label: forth_song.name, value: forth_song.id},
                })
            }).catch((err) => {
                this.setState({
                    song_one: null,
                    song_two: null,
                    song_three: null,
                    song_four: null
                });
                if(err.response.status !== 404) {
                    BackendService.defaultErrorTreatment(err);
                }
            });
    }
    requestSongsAvailable(inputValue) {
        return new Promise(function(resolve, reject) {
            let token = localStorage.getItem("auth_token");
            SongService.getActiveSongList(token, 10, 0, inputValue)
                .then(function(response) {
                    let opts = [];
                    response.data.values.forEach(elem => {
                        opts.push({
                            value: elem.id,
                            label: elem.name
                        });
                    });
                    resolve(opts);
                }).catch((err) => {
                BackendService.defaultErrorTreatment(err);
                reject(err);
            });
        });
    }

    setSongInState(keyValuePair) {
        const { key, value } = keyValuePair;
        this.setState({ [key]: value });
    }
    generateListOfSongs() {
        let dropdowns = [];
        let diasText = [
            "Primera",
            "Segunda",
            "Tercera",
            "Cuarta"
        ];
        let songIndexMapper = {
            0: "song_one",
            1: "song_two",
            2: "song_three",
            3: "song_four"
        };
        for(let i = 0; i < 4; i++) {
            let defClass = "row mt-3";
            if(i === 0) defClass = "row";
            dropdowns.push(
                <div className={defClass} key={i}>
                    <div className="col-md-12">
                        <div className="form-group row mb-0">
                            <label className="col-md-4 col-form-label">{diasText[i]} canción</label>
                            <div className="col-md-8">
                                <AsyncSelect
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={this.requestSongsAvailable}
                                    value={this.state[songIndexMapper[i]]}
                                    onChange={(e) => this.setSongInState({key: songIndexMapper[i], value: e})}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return dropdowns;
    }

    validValues(song_one, song_two, song_three, song_four) {
        return !(song_one == null || song_two == null || song_three == null || song_four == null);
    }

    uploadSongOptions() {
        let date = this.props.date;
        let token = localStorage.getItem("auth_token");
        let {song_one, song_two, song_three, song_four} = this.state;
        let valid = this.validValues(song_one, song_two, song_three, song_four);
        if(!valid) {
            alertify.error("Tienes que seleccionar las cuatro canciones para continuar");
            return "";
        }
        this.setState({
            button_enabled: false
        });
        SundaySongService.postSongsForDate(token, date, song_one, song_two, song_three, song_four)
            .then(() => {
                alertify.success("Las canciones se han guardado correctamente");
            }).catch((err) => {
                BackendService.defaultErrorTreatment(err);
            }).finally(() => {
                this.setState({
                    button_enabled: true
                });
            });
    }

    deleteAllOptsForDate() {
        let date = this.props.date;
        let token = localStorage.getItem("auth_token");
        this.setState({
            delete_button_enabled: false
        });
        SundaySongService.deleteAllSongsForDate(token, date)
            .then(() => {
                this.setState({
                    song_one: null,
                    song_two: null,
                    song_three: null,
                    song_four: null,
                });
                alertify.success("Las canciones se han borrado correctamente");
            }).catch((err) => {
                BackendService.defaultErrorTreatment(err);
            }).finally(() => {
                this.setState({
                    delete_button_enabled: true
                });
            })
    }

    render() {
        let dropdowns = this.generateListOfSongs();
        let {button_enabled, delete_button_enabled} = this.state;
        return(
        <div>
            {dropdowns}
            <div className="row mt-4">
                <div className="col-md-6">
                    <button type="button"
                            className="btn btn-primary btn-lg waves-effect waves-light"
                    onClick={() => this.uploadSongOptions()} disabled={!button_enabled}>Guardar cambios
                    </button>
                </div>
                <div className="col-md-6">
                    <button type="button"
                            className="btn btn-danger btn-lg waves-effect waves-light"
                            onClick={() => this.deleteAllOptsForDate()} disabled={!delete_button_enabled}>Borrar todas las canciones
                    </button>
                </div>
            </div>
        </div>
        );
    }
}