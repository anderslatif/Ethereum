import initialStoreState from '../store/initialStoreState.js'
import {WEB3_INITIALIZED, INIT_COINBASE, INIT_OPEN_ELECTION_CONTRACT_FACTORY, INIT_OPEN_ELECTION_CONTRACT} from '../constants/constants.js';

export default function web3Reducer(state = initialStoreState.web3, action) {
    switch (action.type) {
        case WEB3_INITIALIZED:
            return {
                web3Instance: action.payload.web3Instance
            };
        case INIT_COINBASE:
            return {
                ...state,
                coinbase: action.payload
            };
        case INIT_OPEN_ELECTION_CONTRACT_FACTORY:
            return {
                ...state,
                OpenElectionContractFactory: action.payload
            };
        case INIT_OPEN_ELECTION_CONTRACT:
            return {
                ...state,
                OpenElection: action.payload
            };
        default:
            return state;
    }
}
