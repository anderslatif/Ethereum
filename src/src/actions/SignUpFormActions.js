import AuthenticationContract from '../../build/contracts/Authentication.json';
import {loginUser} from './LoginButtonActions';
import store from '../store/configureStore';

const contract = require('truffle-contract');

export function signUpUser(name) {
    let web3 = store.getState().web3.web3Instance;

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function (dispatch) {
            // Using truffle-contract we create the authentication object.
            const authentication = contract(AuthenticationContract);
            authentication.setProvider(web3.currentProvider);

            // Declaring this for later so we can chain functions on Authentication.
            let authenticationInstance;

            // Get current ethereum wallet.
            web3.eth.getCoinbase((error, coinbase) => {
                if (error) {
                    console.error(error);
                }

                authentication.deployed().then(function (instance) {
                    authenticationInstance = instance;

                    // Attempt to sign up user.
                    authenticationInstance.signup(name, {from: coinbase})
                        .then(function (result) {
                            return dispatch(loginUser())
                        })
                        .catch(function (error) {
                            console.error(error);
                        })
                })
            })
        };
    } else {
        console.error('Web3 is not initialized.');
    }
}
