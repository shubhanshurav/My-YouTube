import { createSlice } from "@reduxjs/toolkit";
// import { LIVE_CHAT_COUNT } from "../../utils/Contants";

const LIVE_CHAT_COUNT = process.env.REACT_APP_LIVE_CHAT_COUNT;

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // if(state.messages.length)
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
