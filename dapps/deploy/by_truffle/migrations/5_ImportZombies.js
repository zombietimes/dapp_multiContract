const sol = artifacts.require("./ImportZombies.sol");
module.exports = function(deployer) {
  deployer.deploy(sol);
};

