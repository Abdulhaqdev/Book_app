import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  email: "",
  role: "admin",
};

export const userSlice = createSlice({
  name: "auth/user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.fullname = `${action.payload.first_name} ${action.payload.last_name}`;
      state.email = action.payload.email;
      state.phone = action.payload.phone_number;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
