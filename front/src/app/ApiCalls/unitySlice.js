import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unitySlice = createApi({
    reducerPath: "unitis",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllUnitis: builder.query({
            query: (args) => `unities?sort=createdAt:DESC&populate=*&filters[${args.year}][$eq]=true&filters[language][slug][$eq]=${args.lang}`
        }),
    })
})

export const { useGetAllUnitisQuery } = unitySlice