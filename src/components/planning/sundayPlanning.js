import React, {Component} from "react";
import MissioUtils from "../../service/utils";
import AttendanceSheet from "../attendance/attendanceSheet";
import AsyncSelect from "react-select/async";

export default class SundayPlanning extends Component {
    render() {
        let title = "Seleccione un domingo para cargar datos";
        if (this.props.selected != null) {
            title = "Planificación para el día " + MissioUtils.convertPostDateToWritten(this.props.selected);
            let extracted = MissioUtils.extractElementsFromWrittenDate(this.props.selected);
            console.log(extracted);
            return (
                <div className="card">
                    <div className="card-body">
                        <h4 className="header-title">{title}</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <AttendanceSheet showDate={false} day={extracted.day} month={extracted.month} year={extracted.year}/>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group row mb-0">
                                            <label className="col-md-4 col-form-label">Primera canción</label>
                                            <div className="col-md-8">
                                                <AsyncSelect
                                                    isMulti
                                                    cacheOptions
                                                    defaultOptions
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="form-group row mb-0">
                                            <label className="col-md-4 col-form-label">Primera canción</label>
                                            <div className="col-md-8">
                                                <AsyncSelect
                                                    isMulti
                                                    cacheOptions
                                                    defaultOptions
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="form-group row mb-0">
                                            <label className="col-md-4 col-form-label">Primera canción</label>
                                            <div className="col-md-8">
                                                <AsyncSelect
                                                    isMulti
                                                    cacheOptions
                                                    defaultOptions
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div className="form-group row mb-0">
                                            <label className="col-md-4 col-form-label">Primera canción</label>
                                            <div className="col-md-8">
                                                <AsyncSelect
                                                    isMulti
                                                    cacheOptions
                                                    defaultOptions
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <button type="button"
                                                className="btn btn-primary btn-lg waves-effect waves-light">Guardar cambios
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="header-title">{title}</h4>
                </div>
            </div>
        );
    }
}