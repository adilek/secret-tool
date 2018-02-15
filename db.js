/**
 * @author Adil Aliyev <adilaliev@gmail.com>
 */

'use strict';
/* jshint esversion: 6*/

class DB {
    constructor() {
        this.db = window.localStorage;
    }

    insert(key, value) {
        this.db.setItem(key, value);
    }

    clear() {
        this.db.clear();
    }

    size() {
        return this.db.length;
    }

    deleteItem(key) {
        this.db.removeItem(key);
    }

    readData(callback) {
        if (callback) {
            for (let i = 0; i < this.db.length; i++) {
                let key = this.db.key(i);
                callback(i, this.db.getItem(key));
            }
        }
    }

    readAll(callback) {
        if (callback) {
            let dataObj = [];
            for (let i = 0; i < this.db.length; i++) {
                let key = this.db.key(i);
                dataObj.push(JSON.parse(this.db.getItem(key)));
            }
            callback(dataObj);
        }
    }

}