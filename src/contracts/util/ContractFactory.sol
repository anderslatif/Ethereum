pragma solidity ^0.4.0;

import '../voting/open/OpenElection.sol';
import "../util/ownership/Ownable.sol";

contract ContractFactory is Ownable {

    mapping (address => OpenElection[]) contracts;
    address[] users;

    event LogContractCreated (address userAddress);

    function createContract() returns(OpenElection) {
        OpenElection electContract = new OpenElection();
        //var addressArray = contracts[msg.sender];
        //addressArray.push(electContract);
        contracts[msg.sender].push(electContract);
        users.push(msg.sender);
        ContractCreatedEvent(electContract); // fires an event
        return electContract;
    }

    function getMyContracts() returns(OpenElection[] contractAddresses) {
        var addressArray = contracts[msg.sender];
        return addressArray;
    }

    function getAllUsers() onlyOwner returns(address[] allUsers) {
        return users;
    }

}



    /*  address[] public contracts;


        function createContract (string _proposalDescription, bytes32[] _proposalDescriptions) returns(address newContract) {
            OpenElection electContract = new OpenElection(_proposalDescription, _proposalDescriptions, msg.sender);
            contracts.push(electContract);
            return electContract;
        }

        function getContractCount() public constant returns(uint contractCount) {
            return contracts.length;
        }*/




