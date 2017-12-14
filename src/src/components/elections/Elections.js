import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';
//import {browserHistory} from 'react-router';

import OpenElectionContract from "../../../build/contracts/OpenElection.json";
import getWeb3 from '../../actions/Web3Actions'

import PropositionItem from './PropositionItem.js';

class Elections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: this.props.params.address,
            contract: null,
            proposalDescription: "",
            proposalDescriptions: [],
            votes: []
        }
    }

    componentDidMount() {
        getWeb3.then(results => {
            this.findContract();
        }).then(() => {
            this.getContractValues(this.state.contract)
        })
    }


    findContract = () => {
        let OpenElection = this.props.web3Instance.eth.contract(OpenElectionContract.abi);    // contract definition
        let openElection = OpenElection.at(this.state.address);  // instance

        this.setState({contract: openElection});
    };

    async getContractValues(openElection) {
        const web3 = this.props.web3Instance;
        const proposalDescription = await openElection.getProposalDescription.call({from: web3.eth.coinbase});

        const results = await openElection.getResults.call({from: web3.eth.coinbase});

        const proposalDescriptionsAsHex = results[0];
        let proposalDescriptions = [];
        await proposalDescriptionsAsHex.forEach(proposalHex => {
            proposalDescriptions.push(web3.toAscii(proposalHex).replace(/\u0000/g, ''))
        });

        const votesAsBigNumber = results[1];
        let votes = [];
        await votesAsBigNumber.forEach(bigNumberVote => {
            let number = bigNumberVote.toNumber();
            votes.push(number);
        });


        this.setState({
            proposalDescription: proposalDescription,
            proposalDescriptions: proposalDescriptions,
            votes: votes
        });}

    castAVote = (proposalIndex, event = null) => {
        if (event)
            event.preventDefault();

        this.state.contract.vote(proposalIndex, {from: this.props.web3Instance.eth.coinbase});
/*        let url = '/elections/' + this.state.address;
        browserHistory.push(url);*/
        window.location.reload();
    };


    render() {

        let propositionItemElements = [];
        this.state.proposalDescriptions.forEach((proposal, index) => {
            const propositionItem = <PropositionItem key={index} proposalIndex={index} proposal={proposal}
                                                     votes={this.state.votes[index]} castAVote={this.castAVote}/>;
            propositionItemElements.push(propositionItem);
        });

        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <h1>{this.state.proposalDescription}</h1>
                        <br/>
                        {propositionItemElements}
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

export default connect(mapStateToProps, mapDispatchToProps)(Elections);
// the connect method transforms the current Redux store state and imported actions into the props

