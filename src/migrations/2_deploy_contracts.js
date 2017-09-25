let Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
let Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
let Authentication = artifacts.require("./Authentication.sol");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, Authentication);
  deployer.deploy(Authentication);
};