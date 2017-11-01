import OpenElectionContract from '../../build/contracts/OpenElection.json';
import {ELECTION_RESULTS_RETRIEVED, GET_OPEN_ELECTIONS} from "../constants/constants";

import store from '../store/configureStore';

const contract = require('truffle-contract');

//import OpenElectionContract from '../../build/contracts/OpenElection.json';
import ContractFactoryContract from '../../build/contracts/ContractFactory.json';

export function createOpenElectionContract() {
    let web3 = store.getState().web3.web3Instance;

    if (typeof web3 !== 'undefined') {

        console.log("election web3 ", web3);

        web3.eth.getCoinbase((error, coinbase) => {
            // Log errors, if any.
            if (error) {
                console.error(error);
            }

            const contractFactory = contract(ContractFactoryContract);
            contractFactory.setProvider(web3.currentProvider);

            contractFactory.deployed().then(instance => {

                console.log("instance ", instance);
                instance.createContract.call({from: coinbase}).then(response => {
                    console.log("address ", response);
                })
            })

        });

    } else {
        console.error('Web3 is not initialized.');
    }
}


export function getElectionResults() {

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

                instance.getResults.call({from: coinbase}).then(response => {
                    return {
                        type: ELECTION_RESULTS_RETRIEVED,
                        payload: response
                    }
                });
            });


            /*
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
            */



        });


    } else {
        console.error('Web3 is not initialized.');
    }
}


export function getOpenElections() {
    return {
        type: GET_OPEN_ELECTIONS,
        payload: []
    }
}