import { createSlice } from "@reduxjs/toolkit";
import { InitialChannelState } from "../../lib/Types";

const initialState: InitialChannelState = {
  channelId: null,
  channelName: null,
}

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    }
  },
})

export default channelSlice.reducer;
export const {
  setChannelInfo
} = channelSlice.actions