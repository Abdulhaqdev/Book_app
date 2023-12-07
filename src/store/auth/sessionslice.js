import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  signedIn: true,
};

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState,
  reducers: {},
});

export const {} = sessionSlice.actions;

export default sessionSlice.reducer;
