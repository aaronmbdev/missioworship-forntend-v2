import {Component} from "react";
import AttendanceButton from "./attendanceButton";

export default class AttendanceButtonFactory extends Component {
    computeSundaysOfTheMonth(month, year) {
        let sundays = [];
        let date = new Date(year, month - 1, 1);
        while (date.getDay() !== 0) {
            date.setDate(date.getDate() + 1);
        }
        sundays.push(date.getDate());
        while (date.getMonth() === month - 1) {
            date.setDate(date.getDate() + 7);
            sundays.push(date.getDate());
        }
        return sundays;
    }
    generateAttendanceButtons(dates) {
        let buttons = [];
        for(let i = 0; i < 4; i++) {
            buttons.push(<AttendanceButton key={i} day={dates[i]} month={this.props.month} year={this.props.year} />);
        }
        return buttons;
    }
    render() {
        let sundays = this.computeSundaysOfTheMonth(this.props.month, this.props.year);
        return(
            <div className="row">
                {this.generateAttendanceButtons(sundays)}
            </div>
        );
    }
}