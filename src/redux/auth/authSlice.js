import { createSlice } from '@reduxjs/toolkit';
import {register, logIn, logOut, fetchCurrentUser} from './authOperation';

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending] : handlePending,
        [register.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected] : handleRejected,
        [logIn.pending] : handlePending,
        [logIn.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.rejected] : handleRejected,
        [logOut.pending] : handlePending,
        [logOut.fulfilled]:(state)=>{
            state.isLoading = false;
            state.error = null;
            state.user = {name: null, email: null}
            state.token = null;
            state.isLoggedIn = false;
        },
        [logOut.rejected] : handleRejected,
        [fetchCurrentUser.pending] : handlePending,
        [fetchCurrentUser.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.user = action.payload
            state.isLoggedIn = true;
        },
        [fetchCurrentUser.rejected] : handleRejected,
    }
});

export default authSlice.reducer;