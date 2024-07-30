import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const languageSlice = createApi({
    reducerPath: "languages",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllLanguages: builder.query({
            query: (year) => `languages?sort=createdAt:DESC&populate=*&filters[${year}][$eq]=true`
        }),
    })
})

export const { useGetAllLanguagesQuery } = languageSlice