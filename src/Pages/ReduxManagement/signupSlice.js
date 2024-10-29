import { createSlice } from '@reduxjs/toolkit';


export const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    showSignupKey: false,
  },
  reducers: {
    showSignupKey: (state) => {
      state.showSignupKey = true;
    },
    hideSignupKey: (state) => {
      state.showSignupKey = false;
    },
  },
});

export const { showSignupKey, hideSignupKey } = signupSlice.actions;

export default signupSlice.reducer;
