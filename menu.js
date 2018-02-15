/**
 * @author Adil Aliyev <adilaliev@gmail.com>
 */

'use strict';
/* jshint esversion: 6*/

class Menu {

    constructor(callback) {
        this.context = "selection";
        this.callback = callback;
        this.createMenus();
    }

    createMenus() {
        const _this = this;
        const parent = chrome.contextMenus.create({
            "title": "Secret tool",
            "contexts": [this.context]
        });

        chrome.contextMenus.create({
            "title": "Happy",
            "id": "good",
            "parentId": parent,
            "onclick": function (info, tab) {
                _this.onClick(info, tab);
            },
            "contexts": [this.context]
        });

        chrome.contextMenus.create({
            "title": "Sad",
            "id": "sad",
            "parentId": parent,
            "onclick": function (info, tab) {
                _this.onClick(info, tab);
            },
            "contexts": [this.context]
        });

    }

    onClick(info, tab) {
        let data = {};
        data.info = info;
        data.tab = tab;
        this.callback(data);
    }
}
