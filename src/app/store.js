import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth";
import listReducer from "./features/list";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    list: listReducer,
  },
});
