import React, { Component } from 'react'

/*// redux store
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as democracyActions from '../../actions/DemocracyActions.js';*/

import store from '../../store/configureStore';
const contract = require('truffle-contract');
import OpenElectionContract from '../../../build/contracts/OpenElection.json';


class Dashboard extends Component {
    constructor(props, { authData }) {
    super(props);
    authData = this.props;
        this.state = {
            propositionDescription: "",
            propositions: [],
            counts: []
        }
    }

    componentDidMount() {
      //this.props.actions.democracyActions.getElectionResults();
        this.getElectionResults();
    }


    getElectionResults() {
        console.log("hello");

        let web3 = store.getState().web3.web3Instance;

        if (typeof web3 !== 'undefined') {

            web3.eth.getCoinbase((error, coinbase) => {
                // Log errors, if any.
                if (error) {
                    console.error(error);
                }

                const openElection = contract(OpenElectionContract);
                openElection.setProvider(web3.currentProvider);

                openElection.deployed().then(instance => {

                    instance.getProposalDescription.call({from: coinbase}).then(response => {
                        this.setState({
                           propositionDescription: web3.toUtf8(response)
                       })
                    });

                    instance.getResults.call({from: coinbase}).then(response => {
                        let propositions = response[0];
                        propositions.forEach( (item, index) => {
                          propositions[index] = web3.toUtf8(item)
                        });

                        let counts = response[1];
                        counts.forEach( (item, index) => {
                            counts[index] = item.toNumber()
                        });


                        this.setState({
                            propositions: propositions,
                            counts: counts
                        })
                    });
                });
            });


        } else {
            console.error('Web3 is not initialized.');
        }
    }


    render() {
      console.log("propo description ", this.state.propositionDescription);
      console.log("propos ", this.state.propositions);
      console.log("counts ", this.state.counts);

        return(
          <main className="container">
            <div className="pure-g">
              <div className="pure-u-1-1">
                <h1>Dashboard</h1>
                <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
              </div>
            </div>
          </main>
        )
    }
}

export default Dashboard;
/*

const mapStateToProps = (state) => ({
    propositions: state.democracy.propositions.toArray(),
    counts: state.democracy.counts.toArray()
});

const mapDispatchToProps = (dispatch) => ({
    actions : {
        democracyActions : bindActionCreators(democracyActions, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// the connect method transforms the current Redux store state and imported actions into the props
*/


