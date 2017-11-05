import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';

import MyElections from './MyElections';
import CreateNewElection from './CreateNewElection.js';
import ViewModeButtonGroup from './ViewModeButtonGroup.js';

import OpenElectionContract from "../../../build/contracts/OpenElection.json";

class Dashboard extends Component {
    constructor(props, {authData}) {
        super(props);
        authData = this.props;
        this.state = {
            propositionDescription: "",
            propositions: [],
            counts: [],
            isCreatingNewElection: false
        }
    }

    componentDidMount() {

        this.props.OpenElectionContractFactory.getMyContracts.call({from: this.props.coinbase}).then(response => {
            console.log("result from factory ", response);

            let openElect = this.props.web3Instance.eth.contract(OpenElectionContract.abi);
            let firstContract = openElect.at(response[0]);
            console.log("33 ", firstContract)
            // this.props.actions.democracyActions.getOpenElections();
        });

    }

    changeViewMode = () => {
        this.setState({isCreatingNewElection: !this.state.isCreatingNewElection})
    };

    createNewElection = (propositionDescription, propositions) => {

        this.props.OpenElectionContractFactory.createContract(propositionDescription, propositions, {from: this.props.coinbase, gas: 3000000}).then(response => {
            console.log("address ", response);
            this.props.actions.democracyActions.createOpenElectionContract(response);
            this.changeViewMode();
        });
    };


    render() {

        //const modeView = this.state.isCreatingNewElection ? <CreateNewElection/> : <MyElections/>;
        const modeView = this.state.isCreatingNewElection ? <MyElections/> :
            <CreateNewElection createNewElection={this.createNewElection} changeViewMode={this.changeViewMode}/>;

        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <h1>Dashboard</h1>
                        <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page,
                            you've logged in with your own smart contract successfully.</p>
                    </div>
                </div>
                <div>
                    <ViewModeButtonGroup isCreatingNewElection={this.state.isCreatingNewElection}
                                         changeViewMode={this.changeViewMode} />
                </div>
                {modeView}
            </main>
        )
    }
}


const mapStateToProps = (state) => ({
    propositions: state.democracy.propositions.toArray(),
    counts: state.democracy.counts.toArray(),
    coinbase: state.web3.coinbase,
    web3Instance: state.web3.web3Instance,
    OpenElectionContractFactory: state.web3.OpenElectionContractFactory,
    OpenElection: state.web3.OpenElection
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        democracyActions: bindActionCreators(democracyActions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// the connect method transforms the current Redux store state and imported actions into the props


