let Ownable = artifacts.require("./util/ownership/Ownable.sol");
let Killable = artifacts.require("./util/lifecycle/Killable.sol");
let Authentication = artifacts.require("./Authentication.sol");
let OpenElection = artifacts.require("./voting/open/OpenElection.sol");
let ContractFactory = artifacts.require("./util/ContractFactory.sol");


module.exports = function(deployer) {
    deployer.deploy(Ownable);
    deployer.link(Ownable, Killable);
    deployer.deploy(Killable);
    deployer.link(Killable, Authentication);
    deployer.deploy(Authentication);
    deployer.deploy(OpenElection, "which do you want to vote for?", ["option 1", "option 2", "option 3"]);
    deployer.deploy(ContractFactory);
};
