import OpenElectionContract from '../../build/contracts/OpenElection.json';
import {CREATE_NEW_OPEN_ELECTION, ELECTION_RESULTS_RETRIEVED, GET_OPEN_ELECTIONS} from "../constants/constants";

import store from '../store/configureStore';

const contract = require('truffle-contract');

//import OpenElectionContract from '../../build/contracts/OpenElection.json';
import ContractFactoryContract from '../../build/contracts/ContractFactory.json';


export async function createOpenElectionContract(propositionDescription, propositions) {

    let persistedContractAddress = await createOpenElectionContractAbi(propositionDescription, propositions);
    return {
        type: CREATE_NEW_OPEN_ELECTION,
        payload: persistedContractAddress
    }
}

export function createOpenElectionContractAbi(propositionDescription, propositions) {
    let web3 = store.getState().web3.web3Instance;

    let persistedContractAddress = "";
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

                instance.createContract.call(propositionDescription, propositions, {from: coinbase}).then(response => {
                    persistedContractAddress = response;
                })
            })

        });

    } else {
        console.error('Web3 is not initialized.');
    }
    return persistedContractAddress;
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

    let web3 = store.getState().web3.web3Instance;

    if (typeof web3 !== 'undefined') {

        web3.eth.getCoinbase((error, coinbase) => {
            if (error) {
                console.error(error);
            }

            const contractFactory = contract(ContractFactoryContract);
            contractFactory.setProvider(web3.currentProvider);

            contractFactory.deployed().then(instance => {

                instance.getAllUsers.call({from: coinbase}).then(response => {
                    console.log("all users: ", response);
                });

                instance.getMyContracts.call({from: coinbase}).then(response => {
                    console.log("gotten contracts: ", response);
                });
            })

        });

    } else {
        console.error('Web3 is not initialized.');
    }




    return {
        type: GET_OPEN_ELECTIONS,
        payload: []
    }
}