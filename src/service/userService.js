import BackendService from "./backendService";
import axios from "axios";

export default class UserService {

    static user_uri = BackendService.getEndpoint("/v1/user/");

    static createUser(token, name, email, roles) {
        return axios.post(this.user_uri, {
            name: name,
            email: email,
            roles: roles
        }, {
            headers: BackendService.buildAuthHeader(token)

        });
    }
    
    static getUserDetails(token, id) {
        return null;
    }

    static deleteUser(token, id) {
        let uri = this.user_uri + id;
        return axios.delete(uri, {
            headers: BackendService.buildAuthHeader(token)
        });
    }

    static updateUserData(token, name, email, roles) {
        return null;
    }

    static getUserList(token, limit, offset) {
        return axios.get(this.user_uri, {
            params: {
                limit: limit,
                offset: offset
            },
            headers: BackendService.buildAuthHeader(token)
        });
    }
}
