import callApi from "@/configs/callApi";
import { getCookie } from "@/utils/cookie";

export const getNewToken = async () => {
  const refreshToken = getCookie("DivarRefreshToken");
  if (!refreshToken) return;

  try {
    const response = await callApi().post("/auth/check-refresh-token", {
      refreshToken,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};
