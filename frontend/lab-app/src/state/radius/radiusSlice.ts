import { createSlice } from "@reduxjs/toolkit";

interface RadiusState {
  value: number;
}

const initialState: RadiusState = {
  value: 1,
};

const radiusSlice = createSlice({
  name: "radius",
  initialState,
  reducers: {
    setRadius: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRadius } = radiusSlice.actions;

export default radiusSlice.reducer;
