import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';

import OpenElectionContract from "../../../build/contracts/OpenElections.json";
import getWeb3 from '../../actions/Web3Actions'


class Elections extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: this.props.params.address,
            contract: null
        }
    }

    componentDidMount() {
        getWeb3.then(results => {
            this.findContract();
        }).then(() => {
            console.log(this.state.contract);
/*            this.state.contract.getProposalDescription.sendTransaction({from: this.props.web3Instance.eth.coinbase}).then(response => {
                console.log("Election result ", response);
            })*/
            this.state.contract.getProposalDescription.sendTransaction({from: this.props.web3Instance.eth.coinbase}, function(err, txHash) {
                console.log(err);
                console.log(txHash);
            } );
/*            this.state.contract.getProposalDescription.call({from: this.props.web3Instance.eth.coinbase}).then(response => {
                console.log("Election result ", response);
            });*/
        })
    }

    findContract = () => {
        let OpenElection = this.props.web3Instance.eth.contract(OpenElectionContract.abi); // contract definition
        let openElection = OpenElection.at(this.state.address);                             // instance

        this.setState({contract: openElection});
    };

    render() {
        // either the contract doesn't exist
        // or it does but user doesn't have voting / viewing access
        // or the user does have access to the contract and can vote
        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <br/>
                        <p>elections page</p>
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

