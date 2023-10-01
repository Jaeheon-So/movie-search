import {
  DetailMovieRequstType,
  DetailMovieResponseType,
  SearchMovieRequstType,
  SearchMovieResponseType,
} from "../@types/data";
import { axiosInstance } from "./instance";

export const getSearchMovieData = async (params: SearchMovieRequstType) => {
  const data: SearchMovieResponseType = await axiosInstance.get("", { params });
  return data;
};

export const getDetailhMovieData = async (params: DetailMovieRequstType) => {
  const data: DetailMovieResponseType = await axiosInstance.get("", { params });
  return data;
};
