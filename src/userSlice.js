import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    setUser: (state, action) => action.payload,
  },

});

export const{ increment, setUser } = userSlice.actions;
export default userSlice.reducer;