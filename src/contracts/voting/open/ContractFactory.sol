pragma solidity ^0.4.2;

import "../../util/ownership/Ownable.sol";
import "../../util/lifecycle/Killable.sol";

/*
 * Ownable
 *
 * Base contract with an owner.
 * Provides onlyOwner modifier, which prevents function from running if it is called by anyone other than the owner.
 */
contract OpenElection is Ownable, Killable {

    address public owner;

    string public proposalDescription;

    event Voted(uint proposalID, bool position, address voter);


    uint public numProposals;

    //Voter[] public voters;
    mapping(address => Voter) public voters;

    struct Voter {
        uint weight;
        bool voted;
        address delegate;
    }

    Proposal[] public proposals;

    struct Proposal {
        bytes32 proposition;
        uint voteCount;
    }


    // @notice creating the Ballot based on votes
    // @param list of proposals that voters can choose between
    function OpenElection(string _proposalDescription, bytes32[] _proposalDescriptions) {

        proposalDescription = _proposalDescription;

        voters[msg.sender].weight = 1;

        for (uint i=0; i < _proposalDescriptions.length; i++) {
            proposals.push(Proposal({
                proposition: _proposalDescriptions[i],
                voteCount: 0
            }));
        }

    }

    function getProposalDescription() constant returns(string _proposalDescription) {
        return proposalDescription;
        //        return stringToBytes32(proposalDescription);
    }


    function stringToBytes32(string memory source) constant returns (bytes32 result) {
        assembly {
        result := mload(add(source, 32))
        }
    }


    function vote(uint8 proposal) {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted);

        sender.voted = true;
        proposals[proposal].voteCount += 1;
    }

    function getResults() constant returns (bytes32[], uint[]) {

        bytes32[] memory proposalNames = new bytes32[](proposals.length);
        uint[] memory counts = new uint[](proposals.length);

        for (uint p = 0; p < proposals.length; p++) {
            proposalNames[p] = proposals[p].proposition;
            counts[p] = proposals[p].voteCount;
        }
        return (proposalNames, counts);
    }

}

contract ContractFactory is Ownable {

    mapping (address => address[]) contracts;
    address[] users;

    event LogContractCreated (address contractAddress);

    function createContract(string _proposalDescription, bytes32[] _proposalDescriptions) returns(OpenElection) {
        OpenElection electContract = new OpenElection(_proposalDescription, _proposalDescriptions);
        contracts[msg.sender].push(electContract);
        users.push(msg.sender);
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