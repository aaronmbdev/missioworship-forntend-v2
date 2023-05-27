import axios from "axios";
import BackendService from "./backendService";

export default class AttendanceService {
    static attendance_uri = BackendService.getEndpoint("/v1/absences/");
    static getAbsences(token, begin, end) {
        return axios.get(this.attendance_uri  , {
            params: {
                begin: begin,
                end: end
            },
            headers: BackendService.buildAuthHeader(token)
        });
    }

    static willBeAbsent(token, date) {
        let uri = this.attendance_uri + "absent";
        return axios.post(uri, {
            absenceDate: date
        }, {
            headers: BackendService.buildAuthHeader(token)

        });
    }

    static willAttend(token, date) {
        let uri = this.attendance_uri + "attending";
        return axios.post(uri, {
            absenceDate: date
        }, {
            headers: BackendService.buildAuthHeader(token)

        });
    }
}