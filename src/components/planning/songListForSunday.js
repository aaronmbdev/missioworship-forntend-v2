import React, {Component} from "react";
import AsyncSelect from "react-select/async";
import SongService from "../../service/songService";
import BackendService from "../../service/backendService";

export default class SongListForSunday extends Component {
    //this.props.date
    requestSongsAvailable(inputValue) {
        return new Promise(function(resolve, reject) {
            let token = localStorage.getItem("auth_token");
            let limit = 10;
            let offset = 0;
            SongService.getActiveSongList(token, limit, offset, inputValue)
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
            });
        });
    }
    generateListOfSongs() {
        let dropdowns = [];
        let diasText = [
            "Primera",
            "Segunda",
            "Tercera",
            "Cuarta"
        ];
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
                                    isMulti
                                    cacheOptions
                                    defaultOptions
                                    loadOptions={input => {this.requestSongsAvailable(input)}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return dropdowns;
    }
    render() {
        let dropdowns = this.generateListOfSongs();
        return(
        <div>
            {dropdowns}
            <div className="row mt-4">
                <div className="col-md-12">
                    <button type="button"
                            className="btn btn-primary btn-lg waves-effect waves-light">Guardar cambios
                    </button>
                </div>
            </div>
        </div>
        );
    }
}