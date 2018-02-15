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

    //db.insert(newItem.url, newItem);
    alert(JSON.stringify(newItem, null, 4));

    // TODO:
    chrome.browserAction.setBadgeText({text: "1"});
});