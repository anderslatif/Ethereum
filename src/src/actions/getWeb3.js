import store from '../store/configureStore';
import Web3 from 'web3';

import {WEB3_INITIALIZED, INIT_COINBASE, INIT_OPEN_ELECTION_CONTRACT_FACTORY, INIT_OPEN_ELECTION_CONTRACT} from "../constants/constants";

function web3Initialized(results) {
    return {
        type: WEB3_INITIALIZED,
        payload: results
    }
}

let getWeb3 = new Promise(function (resolve, reject) {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', function (dispatch) {
        let results;
        let web3 = window.web3;

        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof web3 !== 'undefined') {
            // Use Mist/MetaMask's provider.
            web3 = new Web3(web3.currentProvider);

            results = {
                web3Instance: web3
            };

            console.log('Injected web3 detected.');

            resolve(store.dispatch(web3Initialized(results)))
        } else {

            // Fallback to localhost if no web3 injection.

            let provider = new Web3.providers.HttpProvider('http://localhost:8545');

            web3 = new Web3(provider);
            initiateContracts(web3);

            results = {
                web3Instance: web3
            };

            console.log('No web3 instance injected, using Local web3.');

            resolve(store.dispatch(web3Initialized(results)))
        }
    })
});

export default getWeb3

import OpenElectionContractFactory from '../../build/contracts/OpenElectionContractFactory.json';
import OpenElectionContract from '../../build/contracts/OpenElection.json';
import contract from 'truffle-contract';

function initiateContracts(web3) {
    web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
            console.error(error);
        }

        store.dispatch(initCoinbase(coinbase));


        const openElectionContractFactory = contract(OpenElectionContractFactory);
        openElectionContractFactory.setProvider(web3.currentProvider);

        openElectionContractFactory.deployed().then(instance => {
            store.dispatch(initOpenElectionContractFactory(instance));
        });


        const openElection = contract(OpenElectionContract);
        openElection.setProvider(web3.currentProvider);

        openElection.deployed().then(instance => {
            store.dispatch(initOpenElectionContract(instance));
        });

    });
}

export function initCoinbase(coinbase) {
    return {
        type: INIT_COINBASE,
        payload: coinbase
    }
}

export function initOpenElectionContractFactory(contract) {
    return {
        type: INIT_OPEN_ELECTION_CONTRACT_FACTORY,
        payload: contract
    }
}

export function initOpenElectionContract(contract) {
    return {
        type: INIT_OPEN_ELECTION_CONTRACT,
        payload: contract
    }
}