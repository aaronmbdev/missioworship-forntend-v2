import MissioUtils from "../service/utils"
import {Component} from "react";
export default class DashboardSection extends Component {
    render() {
        MissioUtils.isLoggedOrRedirect();
        return (
            <div className="row">
                <div className="col-xl-8">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="header-title mb-4">Posiciones en el escenario</h4>

                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="header-title mb-4">Canciones para el domingo</h4>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
