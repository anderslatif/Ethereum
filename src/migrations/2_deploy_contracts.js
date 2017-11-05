let Ownable = artifacts.require("./util/ownership/Ownable.sol");
let Killable = artifacts.require("./util/lifecycle/Killable.sol");
let Authentication = artifacts.require("./Authentication.sol");
let OpenElectionContractFactory = artifacts.require("./voting/open/OpenElectionContractFactory.sol");
let OpenElection = artifacts.require("./voting/open/OpenElection.sol");


module.exports = function(deployer) {
    deployer.deploy(Ownable);
    deployer.link(Ownable, Killable);
    deployer.deploy(Killable);
    deployer.link(Killable, Authentication);
    deployer.deploy(Authentication);
    deployer.deploy(OpenElectionContractFactory);
    deployer.deploy(OpenElection);
};
