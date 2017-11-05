import OpenElectionContract from '../../build/contracts/OpenElection.json';
import {CREATE_NEW_OPEN_ELECTION, ELECTION_RESULTS_RETRIEVED, GET_OPEN_ELECTIONS} from "../constants/constants";

import store from '../store/configureStore';

const contract = require('truffle-contract');


export async function createOpenElectionContract(persistedContractAddress) {

    return {
        type: CREATE_NEW_OPEN_ELECTION,
        payload: persistedContractAddress
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