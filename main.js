/**
 * @author Adil Aliyev <adilaliev@gmail.com>
 */

'use strict';
/* jshint esversion: 6*/

let db = new DB();

new Menu(function (data) {
    let newItem = {};
    newItem.type = data.info.menuItemId;
    newItem.url = data.tab.url;
    newItem.text = data.info.selectionText;

    db.insert(newItem.url, newItem);

    let badgeText = localStorage.length + "";

    chrome.browserAction.setBadgeText({
        text: badgeText
    });
});