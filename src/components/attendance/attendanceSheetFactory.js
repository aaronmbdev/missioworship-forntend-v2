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
            <div className="row">
                {this.generateAttendanceSheets(sundays)}
            </div>
        );
    }
}