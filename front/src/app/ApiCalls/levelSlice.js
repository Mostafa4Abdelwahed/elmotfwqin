import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const levelSlice = createApi({
    reducerPath: "levels",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`}),
    endpoints: (builder) => ({
        getAllLevels: builder.query({
            query: (year) => `levels?sort=createdAt:DESC&filters[slug][$eq]=${year}&populate=*`
        }),
    })
})

export const { useGetAllLevelsQuery } = levelSlice