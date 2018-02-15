/**
 * @author Adil Aliyev <adilaliev@gmail.com>
 */

class DB {
    constructor() {
        this.db = window.localStorage;
    }

    insert(key, value) {
        this.db.setItem(key, value);
    }
}