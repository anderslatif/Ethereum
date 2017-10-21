/* eslint-disable */
import OpenElectionContract from '../../build/contracts/OpenElection.json';

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
