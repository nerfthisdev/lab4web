import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/backend/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendPoint = async (data: {
  x: number;
  y: number;
  radius: number;
}) => {
  const response = await apiClient.post("/points", data);
  return response.data;
};
