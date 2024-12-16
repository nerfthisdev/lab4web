import { createSlice } from "@reduxjs/toolkit";

interface RadiusState {
  value: number;
}

const initialState: RadiusState = {
  value: 0,
};

const radiusSlice = createSlice({
  name: "radius",
  initialState,
  reducers: {
    setRadius: (state, action) => {
      state.value = action.payload; // Update the state with the selected radius
    },
  },
});

export default radiusSlice.reducer;
