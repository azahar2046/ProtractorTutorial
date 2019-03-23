import { browser } from "protractor";
import { Alert } from "selenium-webdriver";

describe('Alerts', function () {

    beforeEach(function () {

        browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');

    });

    it('accept  alert', function () {

        let alerts = browser.switchTo().alert();

        alerts.accept();

    })

    it('dismiss  alert', function () {

        let alerts = browser.switchTo().alert();

        alerts.dismiss();

    })


    it('get  alert text', function () {

        let alerts = browser.switchTo().alert();

        alerts.getText().then(function(text){

            console.log(text);
        });

    })


    it('send alert text', function () {

        let alerts = browser.switchTo().alert();

        alerts.sendKeys('salkfdjfklj');

    })

})