import React, {Component} from 'react';

// redux store
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';

import OpenElectionsTable from './OpenElectionsTable.js';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <main className="container">
                <h1>Featured Open Elections</h1>
                <p>Here is a selection of open elections. Feel free to have your voice be heard.</p>

                <div className="pure-g">
                    <div className="pure-u-1-1">
                        <OpenElectionsTable web3={this.props.web3Instance} coinbase={this.props.coinbase}
                                            OpenElection={this.props.OpenElection}/>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state) => ({
    propositions: state.democracy.propositions.toArray(),
    counts: state.democracy.counts.toArray(),
    web3Instance: state.web3.web3Instance,
    coinbase: state.web3.coinbase,
    contractFactory: state.web3.OpenElectionContractFactory,
    OpenElection: state.web3.OpenElection,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        democracyActions: bindActionCreators(democracyActions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// the connect method transforms the current Redux store state and imported actions into the props

