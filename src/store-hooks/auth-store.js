import { initStore } from './store';
import axios from 'axios';
import { updateObject } from './utility';

const configureStore = () => {
    const actions = {
        AUTH: (actionId, payload) => {                          
                actions.AUTH_START(actionId);
                const state = actionId;
                
                const auth_data = {
                    email: payload[0],
                    password: payload[1],
                    returnSecureToken: true
                }
                let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEwWJEVvuHbBnki_bnMbnXtdL-61CQd7Y';
                if (payload[2]) {
                    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEwWJEVvuHbBnki_bnMbnXtdL-61CQd7Y';
                }
                axios.post(url, auth_data)
                    .then(response => {
                        state=actions.AUTH_SUCCESS(state, response.data.idToken, response.data.localId);
                        state=actions.AUTH_REDIRECT(state,true);
                        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                        localStorage.setItem('auth', response.data.idToken);
                        localStorage.setItem('expiration', expirationDate);
                        localStorage.setItem('id', response.data.localId);
                        actions.AUTH_TIMEOUT(state,response.data.expiresIn * 1000);

                    })
                    .catch(err => {
                        actions.AUTH_REDIRECT(state,false);
                        actions.AUTH_FAILURE(state,err);
                    });
                
                return state;
            },
        AUTH_START: (state)=>{
            return {...state, error: null};

        },
        AUTH_SUCCESS: (state,token, userId)=>{
            
            return { ...state, token: token, userId: userId, error: null};

        },
        AUTH_FAILURE: (state, error)=>{
            return {...state, error: error}
        },
        AUTH_LOGOUT: (state)=>{
            localStorage.removeItem('auth');
            localStorage.removeItem('expiration');
            localStorage.removeItem('id');
            return {...state, token: null, userId: null, redirect: false}
        },
        AUTH_TIMEOUT: (state,expirationTime)=>{
            return dispatch => {
                setTimeout(() => {
                    dispatch('AUTH_LOGOUT',state);
        
                }, expirationTime);
            };
        },
        AUTH_REDIRECT: (state,redirect)=>{
            return {...state, redirect:redirect};
        },
        AUTH_CHECK: (state)=>{
            return dispatch =>{
                const token = localStorage.getItem('auth');
                if(!token){
                    dispatch('AUTH_LOGOUT', state);
                }
                else{
                    const expiration =new Date(localStorage.getItem('expiration'));
                    if(expiration <= new Date()){
                        dispatch('AUTH_LOGOUT', state);
        
                    }
                    else{        
                        const userId = localStorage.getItem('id');
                        dispatch('AUTH_SUCCESS',state,token, userId );
                        dispatch('AUTH_TIMEOUT',state,(expiration.getTime() - new Date().getTime())/1000);
                    }
                }
            }
        }
    }
    initStore(actions, {
        token: null,
        userId: null,
        error: null,
        redirect: false
    });
};

export default configureStore;