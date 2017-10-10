pragma solidity ^0.4.2;

contract OpenElection {

    uint public votingDeadline;
    string public proposalDescription;

    event Voted(uint proposalID, bool position, address voter);


    uint public numProposals;

    //Voter[] public voters;
    mapping(address => Voter) public voters;

    struct Voter {
        uint weight;
        bool voted;
        uint8 votes;
        address delegate;
    }

    Proposal[] public proposals;

    struct Proposal {
        bytes32 proposition;
        uint voteCount;
    }


    uint public balance = 100;

    function OpenElection(uint _balance) {
        balance = _balance;
    }

    // @notice creating the Ballot based on votes
    // @param list of proposals that voters can choose between
    // @param the deadline when the vote ends
   /* function OpenElection(string proposalDescription, bytes32[] proposalDescriptions, uint _votingDeadlineInMinutes) {

        votingDeadline = now + _votingDeadlineInMinutes * 1 minutes;

        voters[msg.sender].weight = 1;

        for (uint i=0; i < proposalDescriptions.length; i++) {
            proposals.push(Proposal({
                proposition: proposalDescriptions[i],
                voteCount: 0
            }));
        }

    }*/







    function vote(uint8 proposal) {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted);

        sender.voted = true;
        proposals[proposal].voteCount += 1;
    }

/*    function getResults() constant returns (Proposal[] proposals) {
        return null;
    }*/

}
