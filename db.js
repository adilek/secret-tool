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
}