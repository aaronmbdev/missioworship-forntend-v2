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
        let response = err.response;
        if(response === undefined) {
            this.#genericErrorProcessing("No se pudo conectar con el servidor");
            return;
        }
        if(response.status === 401) {
            window.location.href = "/login";
        }
        if(response.status === 500) {
            this.#genericErrorProcessing("Se ha producido un error inesperado. Vuelve a intentarlo más tarde.");
        }
        let problems = response.data.problems;
        if(problems !== undefined) {
            err.response.data.problems.forEach(problem => {
                alertify.error(problem);
            });
        }
    }

    static #genericErrorProcessing(msg) {
        alertify.error(msg);
    }

    static buildAuthHeader(token) {
        return {
            Authorization: "Bearer " + token
        }
    }
}
