import axiosInstance from "./axiosService";

// Define types for request and response
interface LoginRequest {
  emailId?: string;
  username?: string;
  password: string;
}

interface LoginResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  success: boolean;
  message: string;
  token?: string;
}

// Login API function
export const loginApi = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>("/login", credentials);
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error during login:", error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || "Login failed.");
  }
};
