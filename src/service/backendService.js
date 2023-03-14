import alertify from "alertifyjs";

export default class BackendService {
    static getEndpoint(with_path) {
        let uri = "https://missio.media";
        if(process.env.NODE_ENV === "development") {
            uri = "http://localhost:8080";
        }
        return uri + with_path;
    }

    static defaultErrorTreatment(err) {
        console.log(err);
        if(err.response.status === 401) {
            window.location.href = "/login";
        }
        alertify.error(err.response.data.problems[0]);
    }

    static buildAuthHeader(token) {
        return {
            Authorization: "Bearer " + token
        }
    }
}