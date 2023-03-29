import BackendService from "./backendService";
import axios from "axios";

export default class SongService {

    static song_uri = BackendService.getEndpoint("/v1/songs/");

    static getSongList(token, limit, offset) {
        return axios.get(this.song_uri  , {
            params: {
                limit: limit,
                offset: offset
            },
            headers: BackendService.buildAuthHeader(token)
        });
    }
    static createSong(token, data) {
        return axios.post(this.song_uri, data, {headers: BackendService.buildAuthHeader(token)});
    }

    static deleteSong(token, id) {
        let uri = this.song_uri + id;
        return axios.delete(uri, {
            headers: BackendService.buildAuthHeader(token)
        });
    }
}
