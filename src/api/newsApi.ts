import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": import.meta.env.VITE_NEWS_API_KEY,
  },
});

export const getTopNewsUrl = (country: string, category: string) => {
  return `/top-headlines?country=${country}&category=${category}&pageSize=15`;
};

export const getSearchNewsUrl = (query: string) => {
  return `/everything?q=${query}&pageSize=15`;
};
