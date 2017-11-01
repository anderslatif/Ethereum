import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'
import getWeb3 from './util/web3/getWeb3'

// Layouts
import App from './App'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import SignUp from './components/signup/SignUp'
import Profile from './components/profile/Profile'

// Redux Store
import store from './store/configureStore'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store);


// let contract = require("truffle-contract");
// import OpenElection from '../build/contracts/OpenElection.json';
//import ContractFactory from '../build/contracts/ContractFactory.json';
// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!', results);

    //let web3 = store.getState().web3.web3Instance;


/*    web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
            console.error(error);
        }


/!*        const contractFactory = contract(ContractFactory);
        contractFactory.setProvider(web3.currentProvider);

        contractFactory.deployed().then(instance => {

            instance.createContract("which do you want to vote for?", ["option 1", "option 2", "option 3"], {from: coinbase}).then(console.log);
            instance.getContractCount.call({from: coinbase}).then(console.log)
        });*!/


        const openElection = contract(OpenElection);
        openElection.setProvider(web3.currentProvider);

        openElection.deployed().then(instance => {

            //instance.getProposalDescription.call({from: coinbase}).then(console.log)
            instance.vote(0, {from: coinbase}).then(voted => {
                console.log("voted? ", voted);
                    instance.getResults.call({from: coinbase}).then(response => console.log(response[1][0].toNumber()))
            })
        });

    });*/



})
.catch(() => {
    console.log('Error in web3 initialization.');
});

ReactDOM.render((
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="dashboard" component={UserIsAuthenticated(Dashboard)}/>
                    <Route path="signup" component={UserIsNotAuthenticated(SignUp)}/>
                    <Route path="profile" component={UserIsAuthenticated(Profile)}/>
                </Route>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
);
