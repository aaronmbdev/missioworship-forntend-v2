import React, {Component} from "react";
import MissioUtils from "../../service/utils";

export default class SundaySelector extends Component {

    selectedDate(date) {
        this.props.handleSelected(date);
    }
    generateButtons(days) {
        let {year, month} = this.props;
        let sheets = [];
        for(let i = 0; i < 4; i++) {
            let formattedDate = MissioUtils.getDateInPostFormat(days[i], month, year);
            let clazz = "btn btn-secondary btn-lg waves-effect waves-light";
            if(this.props.selected != null && this.props.selected === formattedDate) {
                clazz = "btn btn-success btn-lg waves-effect waves-light";
            }
            let dayPrintable = days[i] + "/" + month + "/" + year;
            sheets.push(
                <div className="col-md-3" key={i}>
                    <button type="button" key={i}
                            className={clazz}
                            onClick={() => this.selectedDate(formattedDate)}>
                        {dayPrintable}
                    </button>
                </div>
            );
        }
        return sheets;
    }
    handleSelectedSunday(date) {
        this.props.handleSelected(date);
    }
    render() {
        let sundays = MissioUtils.computeSundays(this.props.month, this.props.year);
        let buttons = this.generateButtons(sundays);
        return(<div className="row">
            {buttons}
        </div>);
    }
}