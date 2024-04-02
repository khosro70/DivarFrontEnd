import callApi from "@/configs/callApi";

export const deleteCategory = async (id: string) => {
  const res = await callApi().delete(`/category/${id}`);
  return res || false;
};
