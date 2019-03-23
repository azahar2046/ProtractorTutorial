"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Alerts', function () {
    beforeEach(function () {
        protractor_1.browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
    });
    it('accept  alert', function () {
        var alerts = protractor_1.browser.switchTo().alert();
        alerts.accept();
    });
    it('dismiss  alert', function () {
        var alerts = protractor_1.browser.switchTo().alert();
        alerts.dismiss();
    });
    it('get  alert text', function () {
        var alerts = protractor_1.browser.switchTo().alert();
        alerts.getText().then(function (text) {
            console.log(text);
        });
    });
    it('send alert text', function () {
        var alerts = protractor_1.browser.switchTo().alert();
        alerts.sendKeys('salkfdjfklj');
    });
});
//# sourceMappingURL=specs2.js.map