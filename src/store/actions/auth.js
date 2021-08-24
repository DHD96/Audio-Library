import * as actionTypes from './actionTypes';
import axios from 'axios';

export const auth_start = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const auth_success = (token, userId, expiresAt) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        expiresAt: expiresAt
    }
};

export const auth_failure = (err) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: err
    }
};

export const auth_logout = () => {
    
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const auth_timeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(auth_logout());

        }, expirationTime);
    };
};

export const auth_redirect = (redirect)=>{
    return {
        type:actionTypes.AUTH_REDIRECT,
        redirect: redirect
    }
}


export const auth = (email, password, isSignIn) => {
    return dispatch => {
        dispatch(auth_start);
        const auth_data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEwWJEVvuHbBnki_bnMbnXtdL-61CQd7Y';
        if (isSignIn) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEwWJEVvuHbBnki_bnMbnXtdL-61CQd7Y';
        }
        axios.post(url, auth_data)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn *1000);
                dispatch(auth_success(response.data.idToken, response.data.localId, expirationDate));
                dispatch(auth_redirect(true));
                
                dispatch(auth_timeout(response.data.expiresIn*1000));

            })
            .catch(err => {
                dispatch(auth_redirect(false));
                dispatch(auth_failure(err));
            });
    }
};
