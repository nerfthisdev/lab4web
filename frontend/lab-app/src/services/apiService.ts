import axios from "axios";
import { toast } from "react-toastify";
import { clearPoints, fetchPoints } from "../state/points/pointSlice";
import { store } from "../state/store";

export const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
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

    store.dispatch(fetchPoints());

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

export const signup = async (credentials: {
  username: string;
  password: string;
}) => {
  const toastId = toast.loading("Creating account...");

  try {
    const response = await apiClient.post("/auth/register", credentials);

    toast.update(toastId, {
      render: "Account created successfully! Please log in.",
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

export const logout = () => {
  localStorage.removeItem("token");
  store.dispatch(clearPoints());
  toast.success("Logged out successfully!");
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");
  return !!token;
};
