import alertify from "alertifyjs";
import jwt_decode from "jwt-decode";
import axios from "axios";
import getEndpoint from "./backendService";

export default function backendLogin(token) {
    let uri = getEndpoint("/v1/login/");
    axios.post(uri, {
        token: token
    }).then(function (response) {
        let new_token = response.data;
        let decoded = jwt_decode(new_token);
        console.log(decoded);
        localStorage.setItem("auth_token", new_token);
        localStorage.setItem("email", decoded.email);
        localStorage.setItem("name", decoded.name);
        localStorage.setItem("user_id", decoded.id);
        localStorage.setItem("profile_pic", decoded.profilePicUrl);
        localStorage.setItem("roles", decoded.roles);
        localStorage.setItem("clearanceLevel", decoded.clearanceLevel);
        window.location.replace("/");
    }).catch(function (err) {
        let errs = err.response.data.problems;
        errs.forEach(element => {
            alertify.error(element);
        });
    })
}
