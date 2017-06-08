// spec.js
describe('Protractor Demo App', function() {
  const firstNumber = element(by.model('first'));
  const secondNumber = element(by.model('second'));
  const goButton = element(by.id('gobutton'));
  // const latestResult = element(by.binding('latest'));
  const history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function() {
    add(1, 2);
    add(3, 4);

    expect(history.count()).toEqual(2);

    expect(history.last().getText()).toContain('1 + 2');
    expect(history.first().getText()).toContain('3 + 4'); // This is corrected!

    add(5, 6);

    expect(history.count()).toEqual(3); // This is corrected!
  });
});
