import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (params) =>
        `everything?q=${params.query}&from=${params.from}&sortBy=${params.sortBy}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
