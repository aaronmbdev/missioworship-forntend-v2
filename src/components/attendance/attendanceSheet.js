import {Component} from "react";
import AttendanceService from "../../service/attendanceService";
import BackendService from "../../service/backendService";
import MissioUtils from "../../service/utils";

export default class AttendanceSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        }
    }
    componentDidMount() {
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
        return users;
    }

    render() {
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
                                <h5 className="font-size-16">{this.props.day} / {this.props.month} / {this.props.year}</h5>
                            </div>
                        </div>
                        <div className="plan-features mt-4">
                            <h5 className="text-center font-size-15 mb-4">Ausencias:</h5>
                            {this.generateUsersMissing()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}