pragma solidity ^0.4.0;

import '../voting/open/OpenElection.sol';
import './ownership/Ownable.sol';

contract ContractFactory is Ownable {

    address[] public contracts;

    function createContract (string _proposalDescription, bytes32[] _proposalDescriptions) returns(address newContract) {
        OpenElection electContract = new OpenElection(_proposalDescription, _proposalDescriptions, msg.sender);
        contracts.push(electContract);
        return electContract;
    }

    function getContractCount() public constant returns(uint contractCount) {
        return contracts.length;
    }

/*    function getContract (address owner) {
        OpenElection con = OpenElection(newContracts[i]);
        Names[i] = con.Name();
    }*/

}
