import { transformToError } from "@/lib/utils";
import { apiDataSchema } from "@/lib/schemas/apiData";
import { TFilters } from "../types";
import axios from "axios";

const newsApiClient = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": import.meta.env.VITE_NEWS_API_KEY,
  },
});

export const getTopNews = async (filters: TFilters) => {
  const { category, country } = filters;
  try {
    const response = await newsApiClient.get(
      `/top-headlines?country=${country.code}&category=${category.value}`
    );
    const data = await apiDataSchema.parseAsync(response.data);
    return data;
  } catch (error) {
    throw transformToError(error);
  }
};

export const getNewsByQuery = async (query: string) => {
  try {
    const response = await newsApiClient.get(`/everything?q=${query}`);
    const data = await apiDataSchema.parseAsync(response.data);
    return data;
  } catch (error) {
    throw transformToError(error);
  }
};
