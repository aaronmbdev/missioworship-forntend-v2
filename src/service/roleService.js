import axios from "axios";
import getEndpoint from "./backendService";

export default function getRoleList(token) {
    let uri = getEndpoint("/v1/role/");
    return axios.get(uri, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
}
