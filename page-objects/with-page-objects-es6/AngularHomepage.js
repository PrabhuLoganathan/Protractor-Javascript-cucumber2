class AngularHomepage {

  constructor() {
    this.nameInput = element(by.model('yourName'));
    this.greeting = element(by.binding('yourName'));
  }

  get() {
    browser.get('http://www.angularjs.org');
  }

  setName(name) {
    this.nameInput.sendKeys(name);
  }

  getGreeting() {
    return this.greeting.getText();
  }
}

module.exports = new AngularHomepage();
