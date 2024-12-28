import { createSlice } from "@reduxjs/toolkit";
import { vec } from "mafs";
import { PayloadAction } from "@reduxjs/toolkit";

interface Point {
  pos: vec.Vector2;
  radius: number;
  flag: boolean;
}

interface PointState {
  pointsArray: Point[];
}

const initialState: PointState = {
  pointsArray: [],
};

const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    addPoint: (
      state,
      action: PayloadAction<{ pos: vec.Vector2; radius: number; flag: boolean }>
    ) => {
      state.pointsArray.push(action.payload);
    },
    clearPoints: (state) => {
      state.pointsArray = [];
    },
  },
});

export const { addPoint, clearPoints } = pointsSlice.actions;

export default pointsSlice.reducer;
