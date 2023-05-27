import {Component} from "react";
import Select from "react-select";
import MissioUtils from "../../service/utils";
import AttendanceButtonFactory from "./attendanceButtonFactory";

export default class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: (new Date()).getMonth() + 1,
            year: (new Date()).getFullYear(),
            avYears: this.computeYears(),
            avMonths: [
                { value: 1, label: 'Enero' },
                { value: 2, label: 'Febrero' },
                { value: 3, label: 'Marzo' },
                { value: 4, label: 'Abril' },
                { value: 5, label: 'Mayo' },
                { value: 6, label: 'Junio' },
                { value: 7, label: 'Julio' },
                { value: 8, label: 'Agosto' },
                { value: 9, label: 'Septiembre' },
                { value: 10, label: 'Octubre' },
                { value: 11, label: 'Noviembre' },
                { value: 12, label: 'Diciembre' }
            ]
        }
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

    computeYears() {
        let current = (new Date()).getFullYear()
        return [
            { value: current - 1, label: (current - 1).toString() },
            { value: current, label: current.toString() },
            { value: current + 1, label: (current + 1).toString() },
            { value: current + 2, label: (current + 2).toString() }
        ]
    }

    render() {
        MissioUtils.isLoggedOrRedirect();
        let {month, year, avYears, avMonths} = this.state;
        return(
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
        );
    }
}