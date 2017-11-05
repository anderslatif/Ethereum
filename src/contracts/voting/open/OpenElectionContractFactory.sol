pragma solidity ^0.4.0;

import "../../util/ownership/Ownable.sol";
import "./OpenElection.sol";

contract OpenElectionContractFactory is Ownable {

    mapping (address => address[]) contracts;
    address[] users;

    event LogContractCreated (address userAddress);

    function createContract(string _proposalDescription, bytes32[] _proposalDescriptions) returns(OpenElection) {
        OpenElection electContract = new OpenElection(_proposalDescription, _proposalDescriptions);
        contracts[msg.sender].push(electContract);
        //users.push(msg.sender);
        LogContractCreated(electContract); // fires an event
        return electContract;
    }

    function getMyContracts() returns(address[] contractAddresses) {
        var addressArray = contracts[msg.sender];
        return addressArray;
    }

    function getAllUsers() onlyOwner returns(address[] allUsers) {
        return users;
    }
}
