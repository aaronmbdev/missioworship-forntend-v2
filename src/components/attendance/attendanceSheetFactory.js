import {Component} from "react";
import MissioUtils from "../../service/utils";
import AttendanceSheet from "./attendanceSheet";

export default class AttendanceSheetFactory extends Component {
    generateAttendanceSheets(dates) {
        let sheets = [];
        for(let i = 0; i < 4; i++) {
            sheets.push(<AttendanceSheet key={i} day={dates[i]} month={this.props.month} year={this.props.year} />);
        }
        return sheets;
    }
    render() {
        let sundays = MissioUtils.computeSundays(this.props.month, this.props.year);
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-primary waves-effect waves-light">Recargar listas</button>
                    </div>
                </div>
                <div className="row mt-3">
                    {this.generateAttendanceSheets(sundays)}
                </div>
            </div>
        );
    }
}