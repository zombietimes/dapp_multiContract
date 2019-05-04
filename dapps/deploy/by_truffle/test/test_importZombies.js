const sol = artifacts.require('ImportZombies.sol');
contract('ImportZombies', function (accounts){
  it("Read() : Read the default value.",async()=>{
    const instance = await sol.deployed();
    const value = await instance.Read();
    assert.equal(value,"I am a zombie.","The value is not correct.");
  });
  it("Write() : Write the value.",async()=>{
    const instance = await sol.deployed();
    const tx = await instance.Write("We are zombies.");
  });
  it("Read() : Read the value again.",async()=>{
    const instance = await sol.deployed();
    const value = await instance.Read();
    assert.equal(value,"We are zombies.","The value has not changed yet.");
  });
});

