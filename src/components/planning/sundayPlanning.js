import React, {Component} from "react";
import MissioUtils from "../../service/utils";
import AttendanceSheet from "../attendance/attendanceSheet";
import SongListForSunday from "./songListForSunday";

export default class SundayPlanning extends Component {
    render() {
        let title = "Seleccione un domingo para cargar datos";
        if (this.props.selected != null) {
            title = "Planificación para el día " + MissioUtils.convertPostDateToWritten(this.props.selected);
            let extracted = MissioUtils.extractElementsFromWrittenDate(this.props.selected);
            return (
                <div className="card">
                    <div className="card-body">
                        <h4 className="header-title">{title}</h4>
                        <div className="row">
                            <div className="col-lg-6">
                                <AttendanceSheet
                                    showDate={false}
                                    day={extracted.day}
                                    month={extracted.month}
                                    year={extracted.year}
                                    afterReload={() => {}}
                                />
                            </div>
                            <div className="col-lg-6">
                                <SongListForSunday date={this.props.selected} />
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