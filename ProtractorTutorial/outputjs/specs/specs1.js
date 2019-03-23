"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var WebTable_1 = require("../WebElements/WebTable");
describe('Web Table operations', function () {
    it('tasks on webTable', function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('https://chercher.tech/protractor/custom-webelement-dynamic-table-protractor');
        var webTable = new WebTable_1.WebTable(protractor_1.element(protractor_1.by.id('table')));
        webTable.getNumberOfRows().then(function (num) {
            console.log(num);
        });
        webTable.getNumberOfColumns().then(function (num) {
            console.log(num);
        });
        webTable.checkdata('Chercher.tech');
        webTable.clickOption('Chercher.tech');
        webTable.getAlldata().then(function (text) {
            console.log(text);
        });
        webTable.getCelldata(2, 3).then(function (text) {
            console.log(text);
        });
    });
});
//# sourceMappingURL=specs1.js.map