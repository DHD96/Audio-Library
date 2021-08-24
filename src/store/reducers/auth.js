import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    token: null,
    userId: null,
    error: null,
    redirect: false,
    expiresAt: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return updateObject(state, {error: null});
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, { token: action.idToken, userId: action.userId, error: null, expiresAt: action.expiresAt});
        case actionTypes.AUTH_FAILURE:
            return updateObject(state, {error: action.error})
        case actionTypes.AUTH_LOGOUT:
            return updateObject(state, {token: null, userId: null, redirect: false, expiresAt: null})
        case actionTypes.AUTH_REDIRECT:
            return updateObject(state, {redirect: action.redirect});
        default:
            return state;
    }
}

export default reducer;