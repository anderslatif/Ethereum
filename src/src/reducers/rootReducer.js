import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import userReducer from './userReducer';
import web3Reducer from './web3Reducer';
import democracyReducer from './democracyReducer';

const reducer = combineReducers({
    routing: routerReducer,
    user: userReducer,
    web3: web3Reducer,
    democracy: democracyReducer
});

export default reducer
