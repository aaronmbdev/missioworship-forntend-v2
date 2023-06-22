import alertify from "alertifyjs";

export default class BackendService {
    static getEndpoint(with_path) {
        let uri = "https://api.missio.media";
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
        if(err.code === "ERR_NETWORK") {
            alertify.error("No se pudo conectar con el servidor");
        }
        err.response.data.problems.forEach(problem => {
            alertify.error(problem);
        })
    }

    static buildAuthHeader(token) {
        return {
            Authorization: "Bearer " + token
        }
    }
}
