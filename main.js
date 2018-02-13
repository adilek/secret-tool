var context = "selection"

var parent = chrome.contextMenus.create({"title": "Secret tool", "contexts": [context]});

var menuGood = chrome.contextMenus.create({
    "title": "Happy",
    "id": "good",
    "parentId": parent,
    "onclick": genericOnClick,
    "contexts": [context]
});

var menuBad = chrome.contextMenus.create({
    "title": "Sad",
    "id": "sad",
    "parentId": parent,
    "onclick": genericOnClick,
    "contexts": [context]
});

function genericOnClick(info, tab) {
    var newItem = {};
    newItem.type = info.menuItemId;
    newItem.url = tab.url;
    newItem.text = info.selectionText;

    alert(JSON.stringify(newItem, null, 4));

    // TODO:
    chrome.browserAction.setBadgeText({text: "1"});
}