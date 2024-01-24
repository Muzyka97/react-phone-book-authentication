import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from './operation';

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const sliceContacts = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchContacts.pending ,handlePending)
        .addCase(fetchContacts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.items = action.payload
        })
        .addCase(fetchContacts.rejected, handleRejected)

        .addCase(addContacts.pending, handlePending)
        .addCase(addContacts.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addCase(addContacts.rejected, handleRejected)
        .addCase(deleteContacts.pending,handlePending)
        .addCase(deleteContacts.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(item => item.id === action.payload )
            state.items.splice(index, 1)
        })
        .addCase(deleteContacts.rejected, handleRejected)
      },
});

export const contactsReducer = sliceContacts.reducer;
export const {actions} = sliceContacts;