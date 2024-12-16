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
  reducers: {},
});

export default radiusSlice.reducer;
