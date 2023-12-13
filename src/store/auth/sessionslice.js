import { createSlice } from "@reduxjs/toolkit";

const accessTokenBook = localStorage.getItem("accessTokenBook");
const initialState = {
  token: accessTokenBook || "",
  signedIn: accessTokenBook ? true : false,
};

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState,
  reducers: {
    setSignedInSuccess: (state, action) => {
      state.signedIn = true;
      state.token = action.payload;
      localStorage.setItem("accessTokenBook", action.payload);
    },
    setSignedOutSuccess: (state, action) => {
      state.signedIn = false;
      state.token = "";
    },
  },
});

export const { setSignedInSuccess, setSignedOutSuccess } = sessionSlice.actions;

export default sessionSlice.reducer;
