export class Commit {
    id;
    message;
    date;
    parent;

    constructor(id, message, date, parent) {
        this.id = id;
        this.message = message;
        this.date = date;
        this.parent = parent;
    }
}
