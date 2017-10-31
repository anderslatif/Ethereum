import OpenElectionContract from '../../build/contracts/OpenElection.json';
import {ELECTION_RESULTS_RETRIEVED} from "../constants/constants";

import store from '../store/configureStore';

const contract = require('truffle-contract');

export function deployOpenElectionContract() {
    let web3 = store.getState().web3.web3Instance;

    if (typeof web3 !== 'undefined') {

        console.log("election web3 ", web3)



    } else {
        console.error('Web3 is not initialized.');
    }
}


export function getElectionResults() {
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

            instance.getResults.call({from: coinbase}).then(response => {
                return {
                    type: ELECTION_RESULTS_RETRIEVED,
                    payload: response
                }
            });
        });
        });


    } else {
        console.error('Web3 is not initialized.');
    }
}