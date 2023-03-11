
export default function getEndpoint(with_path) {
    let uri = "https://missio.media";
    if(process.env.NODE_ENV === "development") {
        uri = "http://localhost:8080";
    }
    return uri + with_path;
}
