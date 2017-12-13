import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';

import ReactMarkdown from 'react-markdown';

class Documentation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const mdFile = "\n" +
            "\n" +
            "# OpenElections\n" +
            "\n" +
            "### OpenElections\n" +
            "\n" +
            "\n" +
            "\n" +
            "## Functions\n" +
            "\n" +
            "\n" +
            "\n" +
            "### Constant functions\n" +
            "\n" +
            "#### getProposalDescription\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "empty list\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|_proposalDescription|bytes32|||\n" +
            "\n" +
            "\n" +
            "#### getResults\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "empty list\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|param0|bytes32|||\n" +
            "|1|param1|uint|||\n" +
            "\n" +
            "\n" +
            "#### numProposals\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "empty list\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|return0|uint||numProposals|\n" +
            "\n" +
            "\n" +
            "#### owner\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "empty list\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|return0|address||owner|\n" +
            "\n" +
            "\n" +
            "#### proposalDescription\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "empty list\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|return0|string||proposalDescription|\n" +
            "\n" +
            "\n" +
            "#### proposals\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|index|uint|||\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|proposition|bytes32|||\n" +
            "|1|voteCount|uint|||\n" +
            "\n" +
            "\n" +
            "#### stringToBytes32\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|source|string|||\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|result|bytes32|||\n" +
            "\n" +
            "\n" +
            "#### voters\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "empty list\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|return0|[object Object]||voters|\n" +
            "\n" +
            "\n" +
            "#### votingDeadline\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "empty list\n" +
            "\n" +
            "\n" +
            "##### Returns\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|return0|uint||votingDeadline|\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "### State changing functions\n" +
            "\n" +
            "#### vote\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Inputs\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|proposal|uint8|||\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "### Events\n" +
            "\n" +
            "#### Voted\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Params\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|proposalID|uint|||\n" +
            "|1|position|bool|||\n" +
            "|2|voter|address|||\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "### Enums\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "### Structs\n" +
            "\n" +
            "#### Voter\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Params\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|weight|uint|||\n" +
            "|1|voted|bool|||\n" +
            "|2|votes|uint8|||\n" +
            "|3|delegate|address|||\n" +
            "\n" +
            "\n" +
            "#### Proposal\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "##### Params\n" +
            "\n" +
            "|#  |Param|Type|TypeHint|Description|\n" +
            "|---|-----|----|--------|-----------|\n" +
            "|0|proposition|bytes32|||\n" +
            "|1|voteCount|uint|||\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n";

        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <ReactMarkdown source={mdFile} />

                    </div>
                </div>
            </main>
        )
    }

}

const mapStateToProps = (state) => ({
    web3Instance: state.web3.web3Instance,
    coinbase: state.web3.coinbase
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        democracyActions: bindActionCreators(democracyActions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Documentation);
// the connect method transforms the current Redux store state and imported actions into the props

