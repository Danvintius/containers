export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    translate(code) {
        if (code === null) {
            return 'Unknown error';
        } else {
            this.errors.get(code);
        }
    }
}