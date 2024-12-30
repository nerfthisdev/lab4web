import axios from "axios";
import { toast } from "react-toastify";

export const apiClient = axios.create({
  baseURL: "http://localhost:23563/backend/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendPoint = async (data: {
  x: number;
  y: number;
  radius: number;
}) => {
  const { x, y, radius } = data;

  const payload = {
    x,
    y,
    r: radius,
    flag: false,
  };

  const toastId = toast.loading("Sending request...");

  try {
    const response = await apiClient.post("/validatepoint", payload);

    toast.update(toastId, {
      render: "Point successfully validated!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });

    return response.data;
  } catch (error: any) {
    toast.update(toastId, {
      render: `Error: ${error.response?.data?.message || error.message}`,
      type: "error",
      isLoading: false,
      autoClose: 5000,
    });

    throw error;
  }
};
