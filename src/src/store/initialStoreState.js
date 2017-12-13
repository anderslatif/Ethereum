import Immutable from 'immutable';

// This is the initial client-side state of the entire store. (May be merged with server-side state __REDUX_STATE__ in index.js)
const initialStoreState = {
    web3: {
        web3Instance: null,
        coinbase: null,
        OpenElectionContractFactory: null,
        OpenElection: null
    },
    user: {
        data: null
    },
    democracy: {
        propositions: new Immutable.List([]),
        counts: new Immutable.List([]),
        myContracts: new Immutable.List([])
    },
    documentation: {
        mdFileStrings: new Immutable.List([]),
        docTitles: new Immutable.List([])
    }
};

export default initialStoreState;