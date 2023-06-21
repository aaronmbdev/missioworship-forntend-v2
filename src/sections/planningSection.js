import React, {Component} from "react";
import MissioUtils from "../service/utils";
import Select from "react-select";
import SundaySelector from "../components/planning/sundaySelector";
import SundayPlanning from "../components/planning/sundayPlanning";

export default class PlanningSection extends Component {
    constructor(props) {
        super(props);
        this.state = MissioUtils.getStateForDateSelection();
        this.handleSelectedSunday = this.handleSelectedSunday.bind(this);
    }

    selectMonth(e) {
        this.setState({
            month: e.value,
        });
    }

    selectYear(e) {
        this.setState({
            year: e.value,
        })
    }

    handleSelectedSunday(sunday) {
        this.setState({
           selected: sunday
        });
    }

    render() {
        MissioUtils.isLoggedOrRedirect();
        let {month, year, avYears, avMonths} = this.state;
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="header-title">Planificación de canciones</h4>
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
                                        <SundaySelector
                                            month={this.state.month}
                                            year={this.state.year}
                                            handleSelected={this.handleSelectedSunday}
                                            selected={this.state.selected}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <SundayPlanning selected={this.state.selected} />
                    </div>
                </div>
            </div>
        );
    }
}