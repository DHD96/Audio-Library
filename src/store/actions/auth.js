import * as actionTypes from './actionTypes';
import axios from 'axios';

export const auth_start = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const auth_success = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
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

export const auth_check = () =>{
    return dispatch =>{
        const token = localStorage.getItem('auth');
        if(!token){
            dispatch(auth_logout());
        }
        else{
            const expiration =new Date(localStorage.getItem('expiration'));
            if(expiration <= new Date()){
                dispatch(auth_logout());

            }
            else{        
                const userId = localStorage.getItem('id');
                dispatch(auth_success(token, userId ));
                dispatch(auth_timeout((expiration.getTime() - new Date().getTime())/1000));
            }
        }
    }
};

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
                dispatch(auth_success(response.data.idToken, response.data.localId));
                dispatch(auth_redirect(true));
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('auth', response.data.idToken);
                localStorage.setItem('expiration', expirationDate);
                localStorage.setItem('id', response.data.localId);
                dispatch(auth_timeout(response.data.expiresIn * 1000));

            })
            .catch(err => {
                dispatch(auth_redirect(false));
                dispatch(auth_failure(err));
            });
    }
};
