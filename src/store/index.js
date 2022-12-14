import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import authMiddleware from "./middleware/authMiddleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

export default store;
