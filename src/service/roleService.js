import axios from "axios";
import BackendService from "./backendService";

export default class RoleService {
    static role_uri = BackendService.getEndpoint("/v1/role/");
    
    static getRoleList(token, searchValue) {
        return axios.get(RoleService.role_uri, {
            params: {
                search: searchValue
            },
            headers: BackendService.buildAuthHeader(token)
        });
    }

    static createRole(token, name, authLevel) {
        return axios.post(RoleService.role_uri, {
            name: name,
            clearanceLevel: authLevel
        }, {headers: BackendService.buildAuthHeader(token)});
    }

    static deleteRole(token, id) {
        let uri = RoleService.role_uri + id;
        return axios.delete(uri, {
            headers: BackendService.buildAuthHeader(token)
        });
    }
}
