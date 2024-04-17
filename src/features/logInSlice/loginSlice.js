import { createSlice } from "@reduxjs/toolkit";

export const logInSlice = createSlice({
    name: 'logIn',
    initialState: {
        showForm: true,
    },
    reducers: {
        setShowForm: (state, action) =>{
            state.showForm = action.payload;
        },
    },
});

export const {setShowForm} = logInSlice.actions;
export default logInSlice.reducer;