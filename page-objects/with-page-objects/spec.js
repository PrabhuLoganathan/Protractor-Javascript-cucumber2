const angularHomepage = require('./AngularHomepage.js');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get();

    angularHomepage.setName('Julie');

    expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
  });
});
