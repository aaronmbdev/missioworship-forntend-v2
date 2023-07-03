import MissioUtils from "../service/utils"
import {Component} from "react";
import alertify from "alertifyjs";
export default class DashboardSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deferredPrompt: undefined
        }
    }

    componentDidMount() {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.setState({
                deferredPrompt: e
            })
        });
    }

    async install() {
        let deferredPrompt = this.state.deferredPrompt;
        if(deferredPrompt !== undefined) {
            deferredPrompt.prompt();
            const {outcome} = await deferredPrompt.userChoice;
            console.log(outcome);
        } else {
            alertify.notify("Esta característica está deshabilitada temporalmente.")
        }
    }
    render() {
        let installed = false;
        window.addEventListener('DOMContentLoaded', () => {
            if (window.matchMedia('(display-mode: standalone)').matches) {
                installed = true;
            }
        });
        MissioUtils.isLoggedOrRedirect();
        return (
            <div>
                {!installed &&
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="alert alert-info" role="alert">
                                Parece que estás accediendo desde el navegador. Si te <strong>descargas la app</strong> podrás acceder
                                mucho más rápido.
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <button
                                type="button"
                                className="btn btn-primary waves-effect waves-light"
                                onClick={() => this.install()}>
                                Instalar app
                            </button>
                        </div>
                    </div>
                }
                <p></p>
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
            </div>
        );
    }
}
