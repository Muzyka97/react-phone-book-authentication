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
    reducers: {},
    extraReducers: (builder)=> {
        builder
        .addCase(register.pending, handlePending)
        .addCase(register.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(register.rejected, handleRejected)

        .addCase(logIn.pending, handlePending)
        .addCase(logIn.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(logIn.rejected, handleRejected)

        .addCase(logOut.pending, handlePending)
        .addCase(logOut.fulfilled,(state)=>{
            state.isLoading = false;
            state.error = null;
            state.user = {name: null, email: null}
            state.token = null;
            state.isLoggedIn = false;
        })
        .addCase(logOut.rejected, handleRejected)
        
        .addCase(fetchCurrentUser.pending, handlePending)
        .addCase(fetchCurrentUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.user = action.payload
            state.isLoggedIn = true;
        })
        .addCase(fetchCurrentUser.rejected, handleRejected)
    }
});

export default authSlice.reducer;