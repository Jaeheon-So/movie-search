import { axiosInstance } from "./instance";

export const getSearchMovieData = async (params: string) => {
  const data = await axiosInstance.get("", { params });
  return data;
};
