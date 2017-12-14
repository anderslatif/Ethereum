pragma solidity ^0.4.2;

import "../../util/ownership/Ownable.sol";
import "../../util/lifecycle/Killable.sol";

/*
 * Parliament
 * This contract only allow known members to vote.
 * Members are added through their public key by the contract owner.
 * The contract owner is initially the original deployer but ownership rights can be handed over by the deployer or new owners.
 * Members can have a varying amount of tokens = votes that they can use for each election.
 */
contract Parliament is Ownable, Killable {

    address newOwner;
    mapping (address => Member) public members;
    uint public votingDeadline;

    struct Member {
        string name;
        uint tokens;
        bool exists;
    }

    Proposal[] public proposals;

    struct Proposal {
    bytes32 proposition;
    uint voteCount;
    }

    function Parliament(uint _votingDeadlineInMinutesFromNow) {
        votingDeadline = now + _votingDeadlineInMinutesFromNow * 1 minutes;
    }

    function vote(uint8 proposal) {
        require(now < votingDeadline);

        Member storage sender = members[msg.sender];
        require(sender.tokens > 0);
        sender.tokens -= 1;

        proposals[proposal].voteCount += 1;
    }

    function addMember(address targetMember, string memberName, uint tokens) onlyOwner {
        members[targetMember] = Member({name: memberName, tokens: tokens, exists: true});
    }

    function getMember(address targetMember) returns (string, uint) {
        return (members[targetMember].name, members[targetMember].tokens);
    }

    function removeMember(address targetMember) onlyOwner {
        require(members[targetMember].exists);

        delete members[targetMember];
    }

    modifier restricted() {
        require(msg.sender == owner);
        _;
    }

    function handOverOwnerShip(address _newOwner) restricted {
        owner = _newOwner;
    }

    // there should be a delete function where you can give away your votes (on an issue?) to another voter
    // http://solidity.readthedocs.io/en/develop/solidity-by-example.html

}

contract ContractFactory is Ownable {

    mapping (address => address[]) contracts;
    address[] users;

    event LogContractCreated (address contractAddress);

    function createContract(_votingDeadlineInMinutesForward) returns(Parliament) {
        Parliament electContract = new Parliament(votingDeadlineInMinutesForward);
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