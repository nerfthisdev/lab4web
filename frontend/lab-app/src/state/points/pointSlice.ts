import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { vec } from "mafs";
import { PayloadAction } from "@reduxjs/toolkit";
import { apiClient } from "../../services/apiService";
import { toast } from "react-toastify";

interface Point {
  pos: vec.Vector2;
  radius: number;
  flag: boolean;
  username: string;
}

interface PointState {
  pointsArray: Point[];
  status: string;
  error: string | undefined;
}

const initialState: PointState = {
  pointsArray: [],
  status: "idle",
  error: undefined,
};

export const fetchPoints = createAsyncThunk("posts/fetchPoints", async () => {
  const toastId = toast.loading("Fetching points...");

  try {
    const response = await apiClient.get("/point");

    toast.update(toastId, {
      render: "Points successfully fetched!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });

    console.log(response.data);

    return response.data;
  } catch (error: any) {
    toast.update(toastId, {
      render: `Error: ${error.response?.data?.message || error.message}`,
      type: "error",
      isLoading: false,
      autoClose: 5000,
    });

    return error.message;
  }
});

const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    addPoint: (
      state,
      action: PayloadAction<{
        pos: vec.Vector2;
        radius: number;
        flag: boolean;
        username: string;
      }>
    ) => {
      state.pointsArray.push(action.payload);
    },
    clearPoints: (state) => {
      state.pointsArray = [];
    },
    setPoints: (state, action: PayloadAction<Point[]>) => {
      state.pointsArray = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPoints.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPoints.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedPoints = action.payload.map((point: any) => ({
          pos: [point.x, point.y],
          radius: point.r,
          flag: point.flag,
          username: point.username,
        }));
        state.pointsArray = loadedPoints;
      })
      .addCase(fetchPoints.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addPoint, clearPoints } = pointsSlice.actions;

export default pointsSlice.reducer;
