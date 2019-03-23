import { ElementFinder, by, element } from "protractor";

export class WebTable {
    webTable:ElementFinder;

    constructor(webTable:ElementFinder) {

        this.webTable = webTable;
    }


    getNumberOfRows() {

        return this.webTable.all(by.xpath('//tr')).count();
    }

    getNumberOfColumns() {

        return this.webTable.all(by.xpath('//th')).count();
    }

    getRowData(rowNumber: number) {

        return this.webTable.all(by.xpath('//tr[' + rowNumber + ']//td')).getText();

    }

    getColumnData(colNumber: number) {

        return this.webTable.all(by.xpath('//tr/td[' + colNumber + ']')).getText();

    }

    getAlldata() {

        return this.webTable.all(by.xpath('//td')).getText();
    }

    getCelldata(row:number,col:number) {

        return this.webTable.all(by.xpath('//tr['+row+']/td['+col+']')).getText();
    }

    checkdata(data: string) {

        return this.webTable.all(by.xpath('//td')).getText().then(function (text) {

            expect(text).toMatch(data)
        });
    }


    clickOption(data:string){

        this.webTable.element(by.xpath("//td[normalize-space(text())='"+data+"']/..//input")).click()
    }
}
