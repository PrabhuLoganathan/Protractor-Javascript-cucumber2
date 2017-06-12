const AngularHomepage = function() {
  const nameInput = element(by.model('yourName'));
  const greeting = element(by.binding('yourName'));

  this.get = function() {
    browser.get('http://www.angularjs.org');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
  };

  this.getGreeting = function() {
    return greeting.getText();
  };
};

module.exports = new AngularHomepage();
