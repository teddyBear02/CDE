import { useNavigate } from "react-router-dom";

import axios, { AxiosResponse } from "axios";

interface ApiResponse {
  email: string;
  password: string;
}

const navigate = useNavigate();

const apiLogin: string = import.meta.env.VITE_API_LOGIN_URL as string;

let loginService = {
  async handleLogin(data: any) {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.post(apiLogin);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
    }
  },
};

export { loginService };
