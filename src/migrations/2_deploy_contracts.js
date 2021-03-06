let Ownable = artifacts.require("./util/ownership/Ownable.sol");
let Killable = artifacts.require("./util/lifecycle/Killable.sol");
let Authentication = artifacts.require("./Authentication.sol");
let OpenElection = artifacts.require("./voting/open/ContractFactory.sol");
let Parliament = artifacts.require("./voting/closed/Parliament.sol");


module.exports = function(deployer) {
    deployer.deploy(Ownable);
    deployer.link(Ownable, Killable);
    deployer.deploy(Killable);
    deployer.link(Killable, Authentication);
    deployer.deploy(Authentication);
    deployer.deploy(OpenElection);
};
