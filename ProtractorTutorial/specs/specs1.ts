import { browser, element, by } from "protractor";
import { WebTable } from "../WebElements/WebTable";


describe('Web Table operations', function () {

    it('tasks on webTable', function () {

        browser.ignoreSynchronization=true;

        browser.get('https://chercher.tech/protractor/custom-webelement-dynamic-table-protractor');

        let webTable = new WebTable(element(by.id('table')));

        webTable.getNumberOfRows().then(function (num: any) {

            console.log(num);
        });

        webTable.getNumberOfColumns().then(function (num: any) {

            console.log(num);
        });

        webTable.checkdata('Chercher.tech');

        webTable.clickOption('Chercher.tech');

        webTable.getAlldata().then(function (text: any) {

            console.log(text)
        });

        webTable.getCelldata(2, 3).then(function (text: any) {

            console.log(text)
        })

    })

});