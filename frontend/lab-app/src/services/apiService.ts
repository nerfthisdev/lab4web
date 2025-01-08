import axios from "axios";
import { toast } from "react-toastify";

export const apiClient = axios.create({
  baseURL: "http://localhost:23563/backend/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve the token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

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

export const login = async (credentials: {
  username: string;
  password: string;
}) => {
  const toastId = toast.loading("Logging in...");

  try {
    const response = await apiClient.post("/auth/login", credentials);
    const { token } = response.data;

    localStorage.setItem("token", token);

    toast.update(toastId, {
      render: "Login successful!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });

    return token;
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

export const logout = () => {
  localStorage.removeItem("token");
  toast.success("Logged out successfully!");
};
