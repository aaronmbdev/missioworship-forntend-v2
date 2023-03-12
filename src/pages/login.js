import { GoogleLogin } from '@react-oauth/google';
import alertify from 'alertifyjs';
import backendLogin from "../service/loginService";

const LoginPage = () => {
    return(
        <div className="account-pages my-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mb-5">
                            <a href="index.html" className="logo"><img src="assets/images/logo-dark.png" height="24" alt="logo" /></a>
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
