import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const USER_INFO_KEY = 'USER_INFO';

const userInfoFromStorage = localStorage.getItem(USER_INFO_KEY) ? JSON.parse(localStorage.getItem(USER_INFO_KEY)) : null;

const initialState = {
    userInfoState: {
        data: userInfoFromStorage,
        loading: false,
        error: null,
    },
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginAction(state, action) {
            localStorage.removeItem(USER_INFO_KEY)
            state.userInfoState = {
                ...state.userInfoState,
                loading: true,
            }
        },
        loginActionSuccess(state, action) {
            const userInfoResponse = { ...action.payload };
            localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfoResponse))
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                data: userInfoResponse,
            }
        },
        loginActionFailed(state, action) {
            localStorage.removeItem(USER_INFO_KEY)
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                error: toast.error(action.payload),
            }
        },
        registerAction(state, action) {
            localStorage.removeItem(USER_INFO_KEY)
            state.userInfoState = {
                ...state.userInfoState,
                loading: true,
            }
        },
        registerActionSuccess(state, action) {
            const userInfoResponse = { ...action.payload };
            localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfoResponse))
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                data: userInfoResponse,
            }
        },
        registerActionFailed(state, action) {
            console.log("action.payload",action.payload)
            localStorage.removeItem(USER_INFO_KEY)
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                error: toast.error(action.payload),
            }
        },
        logoutAction(state, action) {
            console.log('logout')
            localStorage.removeItem(USER_INFO_KEY);
            state.userInfoState = {
                ...state.userInfoState,
                loading: false,
                data: null
            }
        },
        // logoutActionSuccess(state, action) {
        // },
        // logoutActionFailed(state, action) {
        // },
    },
})

export const {
    loginAction, loginActionSuccess, loginActionFailed,
    registerAction, registerActionSuccess, registerActionFailed,
    logoutAction,
} = userSlice.actions
export const userReducer = userSlice.reducer