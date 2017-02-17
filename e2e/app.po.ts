import { browser, element, by } from 'protractor';

export class SxtPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sxt-root h1')).getText();
  }
}
