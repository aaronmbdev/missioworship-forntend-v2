import {Component} from "react";
import AttendanceService from "../../service/attendanceService";
import BackendService from "../../service/backendService";
import MissioUtils from "../../service/utils";

export default class AttendanceSheet extends Component {
    constructor(props) {
        super(props);
        let showDate = this.props.showDate;
        if (showDate === undefined) showDate = true;
        this.state = {
            data: undefined,
            date: this.props.day + "-" + this.props.month + "-" + this.props.year,
            showDate: showDate
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.fetchInformation();
    }

    componentDidMount() {
        this.fetchInformation();
    }

    fetchInformation() {
        let token = localStorage.getItem("auth_token");
        let date = MissioUtils.getDateInPostFormat(this.props.day, this.props.month, this.props.year);
        AttendanceService.getAllAbsences(token, date)
            .then((response) => {
                this.setState({
                    data: response.data
                })
            }).catch((err) => BackendService.defaultErrorTreatment(err));
    }

    generateUsersMissing() {
        let data = this.state.data;
        if(data === undefined) {
            return (<p><i
                className="mdi mdi-spin font-size-16 align-middle text-primary mr-2"></i> Cargando...</p>);
        }
        let users = [];
        let i = 0;
        data.forEach(user => {
            users.push(
                <p key={i}><i
                    className="mdi mdi-window-close font-size-16 align-middle text-primary mr-2"></i> {user.name}</p>
            );
            i++;
        });
        if(users.length === 0) {
            return (<p>No hay ausencias</p>);
        }
        return users;
    }

    render() {
        let title = this.props.day + "/" + this.props.month + "/" + this.props.year;
        let subtitle = (<h5 className="text-center font-size-15 mb-4">Ausencias:</h5>);
        if (this.state.showDate !== true) {
            title = "Ausencias del domingo";
            subtitle = (<p></p>);
        }
        return(
            <div className="col-xl-3 col-md-6">
                <div className="card plan-box">
                    <div className="card-body p-4">
                        <div className="media mb-1">
                            <div className="avatar-xs mr-3">
                                <span className="avatar-title rounded-circle bg-primary">
                                    <i className="ti-calendar"></i>
                                </span>
                            </div>
                            <div className="media-body">
                                <h5 className="font-size-16">{title}</h5>
                            </div>
                        </div>
                        <div className="plan-features mt-4">
                            {subtitle}
                            {this.generateUsersMissing()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}