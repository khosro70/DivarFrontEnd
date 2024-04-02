import { getNewToken } from "@/services/getNewToken";
import { getCookie, setCookies } from "@/utils/cookie";
import axios from "axios";

const callApi = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    }, 
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getCookie("DivarAccessToken");
      if (accessToken) {
        config.headers["Authorization"] =
          "Bearer " + getCookie("DivarAccessToken");
      }
      return config;
    },
    (error) => {
      throw error;
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config; // این می شه درخواستی که رقته و درجوابش این ارور اومده
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; // تا بتونم درخواست اصلی رو دوباره بفرستم
        const res = await getNewToken();
        if (!res?.response) return;
        setCookies(res.response.data);
        return axiosInstance(originalRequest);
      }
      console.log(originalRequest);
      throw error;
    }
  );

  return axiosInstance;
};

export default callApi;
