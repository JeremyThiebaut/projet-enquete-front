import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import authMiddleware from "./middleware/authMiddleware";
import playMiddleware from "./middleware/playMiddleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, playMiddleware),
});

export default store;
