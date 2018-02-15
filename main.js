/**
 * @author Adil Aliyev <adilaliev@gmail.com>
 * @type {string}
 */

'use strict';
/* jshint esversion: 6*/

class Menu {
    constructor() {
        this.context = "selection";
        this.createMenus();
    }

    createMenus() {
        const parent = chrome.contextMenus.create({
            "title": "Secret tool",
            "contexts": [this.context]
        });

        chrome.contextMenus.create({
            "title": "Happy",
            "id": "good",
            "parentId": parent,
            "onclick": this.onClick,
            "contexts": [this.context]
        });

        chrome.contextMenus.create({
            "title": "Sad",
            "id": "sad",
            "parentId": parent,
            "onclick": this.onClick,
            "contexts": [this.context]
        });

    }

    onClick(info, tab) {
        let newItem = {};
        newItem.type = info.menuItemId;
        newItem.url = tab.url;
        newItem.text = info.selectionText;

        alert(JSON.stringify(newItem, null, 4));

        // TODO:
        chrome.browserAction.setBadgeText({text: "1"});
    }
}

new Menu();