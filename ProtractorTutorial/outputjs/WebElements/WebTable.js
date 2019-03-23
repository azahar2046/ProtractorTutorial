"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var WebTable = /** @class */ (function () {
    function WebTable(webTable) {
        this.webTable = webTable;
    }
    WebTable.prototype.getNumberOfRows = function () {
        return this.webTable.all(protractor_1.by.xpath('//tr')).count();
    };
    WebTable.prototype.getNumberOfColumns = function () {
        return this.webTable.all(protractor_1.by.xpath('//th')).count();
    };
    WebTable.prototype.getRowData = function (rowNumber) {
        return this.webTable.all(protractor_1.by.xpath('//tr[' + rowNumber + ']//td')).getText();
    };
    WebTable.prototype.getColumnData = function (colNumber) {
        return this.webTable.all(protractor_1.by.xpath('//tr/td[' + colNumber + ']')).getText();
    };
    WebTable.prototype.getAlldata = function () {
        return this.webTable.all(protractor_1.by.xpath('//td')).getText();
    };
    WebTable.prototype.getCelldata = function (row, col) {
        return this.webTable.all(protractor_1.by.xpath('//tr[' + row + ']/td[' + col + ']')).getText();
    };
    WebTable.prototype.checkdata = function (data) {
        return this.webTable.all(protractor_1.by.xpath('//td')).getText().then(function (text) {
            expect(text).toMatch(data);
        });
    };
    WebTable.prototype.clickOption = function (data) {
        this.webTable.element(protractor_1.by.xpath("//td[normalize-space(text())='" + data + "']/..//input")).click();
    };
    return WebTable;
}());
exports.WebTable = WebTable;
//# sourceMappingURL=WebTable.js.map