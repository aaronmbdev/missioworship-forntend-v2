export default class MissioUtils {
    static isLoggedOrRedirect() {
        let token = localStorage.getItem('auth_token');
        if(!MissioUtils.#tokenIsValid(token)) {
            window.location.replace("/login");
        }
    }

    static computeSundays(month, year) {
        let sundays = [];
        let date = new Date(year, month - 1, 1);
        while (date.getDay() !== 0) {
            date.setDate(date.getDate() + 1);
        }
        sundays.push(date.getDate());
        while (date.getMonth() === month - 1) {
            date.setDate(date.getDate() + 7);
            sundays.push(date.getDate());
        }
        return sundays;
    }

    static getDateInPostFormat(day, month, year) {
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        return year + "-" + month + "-" + day;
    }

    static #tokenIsValid(token) {
        if (token === null) return false;
        let payload = atob(token.split('.')[1]);
        let expiry = JSON.parse(payload).exp;
        let now = Math.floor(Date.now() / 1000);
        return expiry >= now;

    }
}