import { createSlice } from "@reduxjs/toolkit";
import { CHAT_LIMIT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessage: (state, action) => {
      state.messages.splice(CHAT_LIMIT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addmessage } = chatSlice.actions;

export default chatSlice.reducer;
