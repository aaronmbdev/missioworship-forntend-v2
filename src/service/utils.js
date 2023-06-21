export default class MissioUtils {

    static getStateForDateSelection() {
        return {
            month: (new Date()).getMonth() + 1,
            year: (new Date()).getFullYear(),
            avYears: this.getAvailableYearsForDateSelection(),
            avMonths: [
                { value: 1, label: 'Enero' },
                { value: 2, label: 'Febrero' },
                { value: 3, label: 'Marzo' },
                { value: 4, label: 'Abril' },
                { value: 5, label: 'Mayo' },
                { value: 6, label: 'Junio' },
                { value: 7, label: 'Julio' },
                { value: 8, label: 'Agosto' },
                { value: 9, label: 'Septiembre' },
                { value: 10, label: 'Octubre' },
                { value: 11, label: 'Noviembre' },
                { value: 12, label: 'Diciembre' }
            ]
        };
    }

    static getAvailableYearsForDateSelection() {
        let current = (new Date()).getFullYear()
        return [
            { value: current - 1, label: (current - 1).toString() },
            { value: current, label: current.toString() },
            { value: current + 1, label: (current + 1).toString() },
            { value: current + 2, label: (current + 2).toString() }
        ];
    }

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