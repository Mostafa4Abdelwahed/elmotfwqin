import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleSlice = createApi({
    reducerPath: "articles",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllArticles: builder.query({
            query: (page)=> `articles?sort=createdAt:DESC&pagination[pageSize]=9&pagination[page]=${page}&populate=*`
        }),
        getSingleArticle: builder.query({
            query: (articleId)=> `articles/${articleId}?populate=*`
        })
    })
})

export const { useGetAllArticlesQuery, useGetSingleArticleQuery } = articleSlice