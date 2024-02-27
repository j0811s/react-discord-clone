import { createSlice } from "@reduxjs/toolkit";
import { InitialUserState } from "../../lib/Types";

const initialState: InitialUserState = {
  user: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {};
    },
  },
})

export default userSlice.reducer;
export const {
  login,
  logout
} = userSlice.actions