import * as actionTypes from '../actions/actionTypes';
import { auth_start } from '../actions/auth';
import { updateObject } from '../utility';
const initialState = {
    token: null,
    userId: null,
    error: null,
    redirect: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return updateObject(state, {error: null});
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, { token: action.idToken, userId: action.userId, error: null});
        case actionTypes.AUTH_FAILURE:
            console.log(action.error);
            return updateObject(state, {error: action.error})
        case actionTypes.AUTH_LOGOUT:
            localStorage.removeItem('auth');
            localStorage.removeItem('expiration');
            localStorage.removeItem('id');
            return updateObject(state, {token: null, userId: null, redirect: false})
        case actionTypes.AUTH_REDIRECT:
            return updateObject(state, {redirect: action.redirect});
        default:
            return state;
    }
}

export default reducer;