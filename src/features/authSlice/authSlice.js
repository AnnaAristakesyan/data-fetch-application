import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    registeredUsers: [],
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    register: (state, action) => {
      state.registeredUsers.push(action.payload);
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
