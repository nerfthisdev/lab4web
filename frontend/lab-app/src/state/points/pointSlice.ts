import { createSlice } from "@reduxjs/toolkit";
import { vec } from "mafs";
import { PayloadAction } from "@reduxjs/toolkit";

interface PointState {
  pointsArray: vec.Vector2[];
}

const initialState: PointState = {
  pointsArray: [],
};

const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    addPoint: (state, action: PayloadAction<vec.Vector2>) => {
      state.pointsArray.push(action.payload);
    },
    removePoint: (state, action: PayloadAction<number>) => {
      state.pointsArray.splice(action.payload, 1);
    },
    clearPoints: (state) => {
      state.pointsArray = [];
    },
  },
});

export const { addPoint } = pointSlice.actions;

export default pointSlice.reducer;
