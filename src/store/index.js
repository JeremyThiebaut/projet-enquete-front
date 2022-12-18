import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import authMiddleware from "./middleware/authMiddleware";
import playMiddleware from "./middleware/playMiddleware";
import nextMiddleware from "./middleware/nextMiddleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }).concat(authMiddleware, playMiddleware, nextMiddleware),
});

export default store;
