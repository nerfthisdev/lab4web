import { configureStore } from "@reduxjs/toolkit";
import radiusReducer from "./radius/radiusSlice";

export const store = configureStore({
  reducer: { radiusReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
