pragma solidity ^0.4.2;

import "../../util/ownership/Ownable.sol";
import "../../util/lifecycle/Killable.sol";

contract Parliament is Ownable, Killable {

    mapping (address => Member) public members;

    struct Member {
        string name;
        uint tokens;
        bool exists;
    }

    function Parliament() {

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



    // there should be a delete function where you can give away your votes (on an issue?) to another voter
    // http://solidity.readthedocs.io/en/develop/solidity-by-example.html


}
