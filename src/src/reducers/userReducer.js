import initialStoreState from '../store/initialStoreState.js'
import {USER_LOGGED_IN, USER_UPDATED, USER_LOGGED_OUT} from '../constants/constants.js';

export default function userReducer(state = initialStoreState.user, action) {
    switch (action.type) {
        case USER_LOGGED_IN || USER_UPDATED:
            return {
                ...state,
                data: action.payload
            };
        case USER_LOGGED_OUT:
            return {
                data: null
            };
        default:
            return state;
    }
}

