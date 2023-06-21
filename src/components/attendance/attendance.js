import {Component} from "react";
import Select from "react-select";
import MissioUtils from "../../service/utils";
import AttendanceButtonFactory from "./attendanceButtonFactory";
import AttendanceSheetFactory from "./attendanceSheetFactory";

export default class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = MissioUtils.getStateForDateSelection();
    }
    selectMonth(e) {
        this.setState({
            month: e.value
        })
    }

    selectYear(e) {
        this.setState({
            year: e.value
        })
    }

    render() {
        MissioUtils.isLoggedOrRedirect();
        let {month, year, avYears, avMonths} = this.state;
        return(
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title">Selección de mes y año</h4>

                                <div className="form-group mb-4">
                                    <Select
                                        options={avMonths}
                                        onChange={(e) => this.selectMonth(e)}
                                        value={avMonths.find(x => x.value === month)}
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <Select
                                        options={avYears}
                                        onChange={(e) => this.selectYear(e)}
                                        value={avYears.find(x => x.value === year)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <h4 className="header-title">Ausencias para {avMonths.find(x => x.value === month).label} del {year}</h4>
                        <AttendanceButtonFactory month={month} year={year}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <AttendanceSheetFactory month={month} year={year} />
                    </div>
                </div>
            </div>
        );
    }
}