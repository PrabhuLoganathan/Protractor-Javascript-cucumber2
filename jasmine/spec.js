describe('A suite is just a function', function () {
  var a;

  it('and so is a spec', function () {
    a = true;

    expect(a).toBe(true);
  });
});

describe('add',function(){
  it('should be able to add 2 numbers',function(){
    expect(add(2,3)).toBe(5);
  });

  it('should be able to add 2 MORE numbers',function(){
    expect(add(5,3)).toBe(8);
  });

  it('should be able to add -ve numbers',function(){
    expect(add(-5,8)).toBe(3);
  });

  it('should be able to add THREE numbers',function(){
    expect(add(5,3,5)).toBe(13);
  });

});
