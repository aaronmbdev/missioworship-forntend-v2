import React, {Component} from "react";
import MissioUtils from "../../service/utils";

export default class SundayPlanning extends Component {
    render() {
        let title = "Seleccione un domingo para cargar datos";
        if (this.props.selected != null) {
            title = "Planificación para el día " + MissioUtils.convertPostDateToWritten(this.props.selected);
        }
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="header-title">{title}</h4>
                </div>
            </div>
        );
    }
}