import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice.js";
import usersReducer from "./slices/userSlice.js";
import authReducer from "./slices/authSlice.js";
import themeReducer from "./slices/themeSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: usersReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});
