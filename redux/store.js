import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice.js";
import usersReducer from "./slices/userSlice.js";
import authReducer from "./slices/authSlice.js";
import themeReducer from "./slices/themeSlice.js";
import hotelReducer from "./slices/hotelSlice.js";
import restaurantReducer from "./slices/restaurantSlice.js";
import searchReducer from "./slices/searchSlice.js";
import tourReducer from "./slices/tourSlice.js";
import marketReducer from "./slices/marketSlice.js";
import transportReducer from "./slices/transportSlice.js";
import exchangeReducer from "./slices/exchangeSlice.js";
import serviceReducer from "./slices/serviceSlice.js";
import loadingReducer from "./slices/loadingSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: usersReducer,
    auth: authReducer,
    theme: themeReducer,
    hotel: hotelReducer,
    restaurant: restaurantReducer,
    search: searchReducer,
    tour: tourReducer,
    market: marketReducer,
    transport: transportReducer,
    exchange: exchangeReducer,
    service: serviceReducer,
    loading: loadingReducer,
  },
});
