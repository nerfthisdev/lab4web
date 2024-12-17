import { configureStore } from "@reduxjs/toolkit";
import radiusReducer from "./radius/radiusSlice";
import pointReducer from "./points/pointSlice";

export const store = configureStore({
  reducer: { radius: radiusReducer, points: pointReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
