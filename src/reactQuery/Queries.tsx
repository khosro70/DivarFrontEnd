import callApi from "@/configs/callApi";

export const whoAmI = async () => {
  const res = await callApi().get("/user/whoami");
  return res || false;
};

export const getCategories = async () => {
  const res = await callApi().get("/category");
  return res || false;
};

export const addCategory = async (data: any) => {
  const res = await callApi().post("/category", data);
  return res || false;
};

export const getPosts = async () => {
  const res = await callApi().get("/post/my");
  return res || false;
};

