import BackendService from "./backendService";
import axios from "axios";

export default class SundaySongService {
    static song_uri = BackendService.getEndpoint("/v1/sunday_songs/");

    static getSongsForDate(token, date) {
        return axios.get(this.song_uri  , {
            params: {
                date: date
            },
            headers: BackendService.buildAuthHeader(token)
        });
    }

    static postSongsForDate(token, date, song_one, song_two, song_three, song_four) {
        return axios.post(this.song_uri, {
            date: date,
            song_one: song_one.value,
            song_two: song_two.value,
            song_three: song_three.value,
            song_four: song_four.value
        }, {headers: BackendService.buildAuthHeader(token)});
    }

}