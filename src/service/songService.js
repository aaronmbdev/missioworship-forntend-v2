import BackendService from "./backendService";
import axios from "axios";

export default class SongService {

    static song_uri = BackendService.getEndpoint("/v1/songs/");

    static getSongList(token, limit, offset, search, availableOnly) {
        let activeFilter = "unactive";
        if(availableOnly) {
            activeFilter = "active";
        }
        return axios.get(this.song_uri  , {
            params: {
                limit: limit,
                offset: offset,
                search: search,
                activeFilter: activeFilter
            },
            headers: BackendService.buildAuthHeader(token)
        });
    }

    static getActiveSongList(token, limit, offset, search) {
        return axios.get(this.song_uri  , {
            params: {
                limit: limit,
                offset: offset,
                activeFilter: "active",
                search: search
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

    static updateSong(token, id, payload) {
        let uri = this.song_uri + id;
        return axios.put(uri, payload, {
            headers: BackendService.buildAuthHeader(token)
        }
        );
    }

    static getAvailableRithms(token) {
        let uri = this.song_uri + "rithms";
        return axios.get(uri,{
            headers: BackendService.buildAuthHeader(token)
        })
    }
}
