/**
 * @author Adil Aliyev <adilaliev@gmail.com>
 */

'use strict';
/* jshint esversion: 6*/

let db = new DB();

function cutUrl(url) {
    if (url.length > 120) {
        let start = url.substr(0, 20);
        let end = url.substr(100)
        url = start + " ... " + end;
    }
    return url;
}

function makeRow(num, url, text, type) {
    let newTr = document.createElement("tr");

    let newNum = document.createElement("td");
    newNum.innerText = num;

    let newUrl = document.createElement("td");
    newUrl.innerText = cutUrl(url);

    let newText = document.createElement("td");
    newText.innerText = text.substr(0, 220) + "...";

    let newType = document.createElement("td");
    newType.innerText = type;

    let newDelete = document.createElement("td");
    newDelete.innerHTML = "<a id=\"delete-" + num + "\" class=\"btn btn-primary my-2\">Delete</a>";

    newTr.appendChild(newNum);
    newTr.appendChild(newUrl);
    newTr.appendChild(newText);
    newTr.appendChild(newType);
    newTr.appendChild(newDelete);

    return newTr;
}

function addDeleteEvent(id, key) {
    document.getElementById("delete-" + id).onclick = function () {
        if (confirm("Are you sure to delete the item?")) {
            db.deleteItem(key);
            deleteRow(id);
        }
    }
}

function deleteRow(id) {
    let row = document.getElementById("delete-" + id).parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function loadData() {
    let tbody = document.getElementById("tbl-rows");
    tbody.innerHTML = "";

    db.readData(function (i, data) {
        data = JSON.parse(data);
        tbody.appendChild(makeRow(i + 1, data.url, data.text, data.type));
        addDeleteEvent(i + 1, data.url);
    });
}

function downloadData() {

}

function cleanData() {
    if (confirm("Do you want to delete?")) {
        db.clear();
    }
}

document.getElementById("btn-clean").onclick = function () {
    cleanData();
};

document.getElementById("btn-load").onclick = function () {
    loadData();
};
