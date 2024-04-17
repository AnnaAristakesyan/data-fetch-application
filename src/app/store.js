import { configureStore } from "@reduxjs/toolkit";
import { logInSlice } from "../features/logInSlice/loginSlice";

const store = configureStore({
    reducer:{
        logIn: logInSlice.reducer,  
    },
});

export default store