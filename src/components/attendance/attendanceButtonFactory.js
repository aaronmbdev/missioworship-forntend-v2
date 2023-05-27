import {Component} from "react";
import AttendanceButton from "./attendanceButton";
import MissioUtils from "../../service/utils";

export default class AttendanceButtonFactory extends Component {
    generateAttendanceButtons(dates) {
        let buttons = [];
        for(let i = 0; i < 4; i++) {
            buttons.push(<AttendanceButton key={i} day={dates[i]} month={this.props.month} year={this.props.year} />);
        }
        return buttons;
    }
    render() {
        let sundays = MissioUtils.computeSundays(this.props.month, this.props.year);
        return(
            <div className="row">
                {this.generateAttendanceButtons(sundays)}
            </div>
        );
    }
}