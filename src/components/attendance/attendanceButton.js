import {Component} from "react";
import AttendanceService from "../../service/attendanceService";
import BackendService from "../../service/backendService";
import MissioUtils from "../../service/utils";

export default class AttendanceButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            absent: undefined,
            lastDate: this.props.year+"-"+this.props.month+"-"+this.props.year
        }
    }

    loadCurrentStatus() {
        let propsDate = this.props.year+"-"+this.props.month+"-"+this.props.year;
        if(this.state.absent === undefined || propsDate !== this.state.lastDate) {
            let token = localStorage.getItem("auth_token");
            let date = MissioUtils.getDateInPostFormat(this.props.day, this.props.month, this.props.year);
            AttendanceService.getAbsences(token, date, date)
                .then((response) => {
                    let absent = false;
                    if(response.data.length !== 0) {
                        absent = true;
                    }
                    this.setState({
                        absent: absent,
                        lastDate: this.props.year+"-"+this.props.month+"-"+this.props.year
                    });
                }).catch((err) => {
                BackendService.defaultErrorTreatment(err);
            })
        }
    }

    willBeAbsent() {
        let token = localStorage.getItem("auth_token");
        let date = MissioUtils.getDateInPostFormat(this.props.day, this.props.month, this.props.year);
        AttendanceService.willBeAbsent(token, date)
            .then(() => {
                this.setState({
                    absent: undefined
                })
            }).catch((err) => {
                BackendService.defaultErrorTreatment(err);
        })
    }

    willAttend() {
        let token = localStorage.getItem("auth_token");
        let date = MissioUtils.getDateInPostFormat(this.props.day, this.props.month, this.props.year);
        AttendanceService.willAttend(token, date)
            .then(() => {
                this.setState({
                    absent: undefined
                })
            }).catch((err) => {
            BackendService.defaultErrorTreatment(err);
        })
    }

    generateAbsenceButtons(absent) {
        if (absent === undefined) {
            return (
                <div className="col-sm-12">
                    <button className="btn btn-warning" type="button">
                        <span className="spinner-grow spinner-grow-sm mr-1" role="status" aria-hidden="true"></span>
                        Cargando...
                    </button>
                </div>
            );
        }

        let checkBtnClass = "btn btn-success waves-effect waves-light";
        let crossBtnClass = "btn btn-secondary waves-effect waves-light";
        if(absent) {
            checkBtnClass = "btn btn-secondary waves-effect waves-light";
            crossBtnClass = "btn btn-danger waves-effect waves-light";
        }

        return (
            <div className="col-sm-12">
                <div className="btn-group btn-group-toggle mt-2 mt-lg-0" data-toggle="buttons">
                    <button type="button" className={checkBtnClass} onClick={
                        () => this.willAttend()
                    }>
                        <i
                            className="mdi mdi-check-bold" /> Asistiré
                    </button>
                    <button type="button" className={crossBtnClass} onClick={
                        () => this.willBeAbsent()
                    }>
                        <i
                            className="mdi mdi-window-close"/> No puedo asistir
                    </button>
                </div>
            </div>
        );

    }

    render() {
        this.loadCurrentStatus();
        return(
            <div className="col-sm-6 col-xl-3">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12"><h4 className="m-0 align-self-center">{this.props.day} / {this.props.month} / {this.props.year}</h4></div>
                        </div>
                        <br/>
                        <div className="row">
                            {this.generateAbsenceButtons(this.state.absent)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}