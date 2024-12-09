import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appslice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    chat: chatSlice,
  },
});

export default store;
