import axios from "axios";

const apiClient = axios.create({
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
    r: radius, // Map 'radius' to 'r'
    flag: false, // Include the 'flag' property
  };

  const response = await apiClient.post("/validatepoint", payload);
  return response.data;
};
