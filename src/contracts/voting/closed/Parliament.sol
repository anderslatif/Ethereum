pragma solidity ^0.4.2;

/*import "../../util/ownership/Ownable";
import "../../util/lifecycle/Killable";*/

contract Parliament /*is Ownable, Killable*/ {

   /* mapping (address => uint) public memberId;
    Member[] public members;

    struct Member {
        address member;
        string name;
    }

    function Parliament(){

    }

    function addMember(address targetMember, string memberName) onlyOwner {
        members[members.length] = Member({member: targetMember, membername: memberName}); // this is ot correct
    }

    function removeMember(address targetMember) onlyOwner {
        require(members[targetMember] != 0);// this is not correct

        delete members[targetMember];
    }

    modifier onlyMembers {
        require (memberId[msg.sender] != 0);
        _;
    }

    function vote() onlyMembers returns(uint voteId) {

    }*/

    // there should be a delete function where you can give away your votes (on an issue?) to another voter
    // http://solidity.readthedocs.io/en/develop/solidity-by-example.html


}
