import { GoogleLogin } from '@react-oauth/google';
import alertify from 'alertifyjs';
import backendLogin from "../service/loginService";
import {useSearchParams} from "react-router-dom";
import logo_default from "../img/logo_default.png";

const LoginPage = () => {
    const [searchParams] = useSearchParams();
    let errCode = searchParams.get("err");
    let err = (<p></p>);
    let no_link = "#"
    if (errCode === "timeout") {
        err = (
            <div className="alert alert-danger mb-0" role="alert">
                Parece que la sesión ha caducado por inactividad. Hay que volver a iniciar sesión.
            </div>
        );
    }
    return(
        <div className="account-pages my-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mb-5">
                            <a href={no_link} className="logo"><img src={logo_default} height="128" alt="logo" /></a>
                            <p></p>
                            <h5 className="font-size-16 text-black-50 mb-4">Missio Worship</h5>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="p-2">
                                    <h5 className="mb-5 text-center">Inicia sesión para continuar.</h5>
                                    <div className="row">
                                        <div className="col-md-12">
                                            {err}
                                        </div>
                                    </div>
                                    <p></p>
                                    <div className="row">
                                        <div className="col-md-12">
                                       
                                            <GoogleLogin
                                                onSuccess={credentialResponse => {
                                                    backendLogin(credentialResponse.credential);
                                                }}
                                            
                                                onError={() => {
                                                    alertify.error("Hubo un error procesando la solicitud");
                                                }}
                                            
                                            />
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
