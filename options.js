/**
 * @author Adil Aliyev <adilaliev@gmail.com>
 */

'use strict';
/* jshint esversion: 6*/

let db = new DB();

function makeRow(num, url, text, type) {
    let newTr = document.createElement("tr");

    let newNum = document.createElement("td");
    newNum.innerText = num;

    let newUrl = document.createElement("td");
    newUrl.innerText = url;

    let newText = document.createElement("td");
    newText.innerText = text;

    let newType = document.createElement("td");
    newType.innerText = type;

    newTr.appendChild(newNum);
    newTr.appendChild(newUrl);
    newTr.appendChild(newText);
    newTr.appendChild(newType);

    return newTr;
}

function loadData() {
    let tbody = document.getElementById("tbl-rows");
    tbody.innerHTML = "";

    db.readData(function (i, data) {
        data = JSON.parse(data);
        tbody.appendChild(makeRow(i + 1, data.url, data.text, data.type));
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
