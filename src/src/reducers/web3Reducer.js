import initialStoreState from '../store/initialStoreState.js'
import {WEB3_INITIALIZED} from '../constants/constants.js';

export default function web3Reducer(state = initialStoreState.web3, action) {
    switch (action.type) {
        case WEB3_INITIALIZED:
            return {
                web3Instance: action.payload.web3Instance
            };
        default:
            return state;
    }
}
